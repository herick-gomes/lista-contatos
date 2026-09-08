import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Botao from '../../components/Botao'
import Contato from '../../models/Contato'
import { RootReducer } from '../../store'
import { adicionar } from '../../store/reducers/contatos'
import {
    cleanName,
    formatPhone,
    isValidEmail,
    isValidName,
    isValidPhone,
    normalizeEmail,
    normalizeName,
    normalizePhone
} from '../../utils/contactValidation'

import * as S from './styles'

type FormErrors = {
    nome?: string
    email?: string
    telefone?: string
}

const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const contatos = useSelector(
        (state: RootReducer) => state.contatos.itens
    )

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [errors, setErrors] = useState<FormErrors>({})

    const validateForm = () => {
        const newErrors: FormErrors = {}

        const normalizedName = normalizeName(nome)
        const normalizedEmail = normalizeEmail(email)
        const normalizedPhone = normalizePhone(telefone)

        if (!isValidName(nome)) {
            newErrors.nome = 'Enter at least 2 characters.'
        } else {
            const nameAlreadyExists = contatos.some(
                (contato) =>
                    normalizeName(contato.nome) === normalizedName
            )

            if (nameAlreadyExists) {
                newErrors.nome =
                    'A contact with this name already exists.'
            }
        }

        if (!isValidEmail(email)) {
            newErrors.email = 'Enter a valid email address.'
        } else {
            const emailAlreadyExists = contatos.some(
                (contato) =>
                    normalizeEmail(contato.email) === normalizedEmail
            )

            if (emailAlreadyExists) {
                newErrors.email =
                    'A contact with this email already exists.'
            }
        }

        if (!isValidPhone(telefone)) {
            newErrors.telefone =
                'Enter a valid phone number.'
        } else {
            const phoneAlreadyExists = contatos.some(
                (contato) =>
                    normalizePhone(contato.telefone) === normalizedPhone
            )

            if (phoneAlreadyExists) {
                newErrors.telefone =
                    'A contact with this phone number already exists.'
            }
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const cadastrarContato = (event: FormEvent) => {
        event.preventDefault()

        if (!validateForm()) {
            return
        }

        const novoContato = new Contato(
            cleanName(nome),
            normalizeEmail(email),
            formatPhone(telefone),
            Date.now()
        )

        dispatch(adicionar(novoContato))

        navigate('/', {
            state: {
                notification: {
                    message: `${novoContato.nome} was added to your contacts.`,
                    type: 'success'
                }
            }
        })
    }

    const handleNameChange = (value: string) => {
        setNome(value)

        if (errors.nome) {
            setErrors((currentErrors) => ({
                ...currentErrors,
                nome: undefined
            }))
        }
    }

    const handleEmailChange = (value: string) => {
        setEmail(value)

        if (errors.email) {
            setErrors((currentErrors) => ({
                ...currentErrors,
                email: undefined
            }))
        }
    }

    const handlePhoneChange = (value: string) => {
        setTelefone(formatPhone(value))

        if (errors.telefone) {
            setErrors((currentErrors) => ({
                ...currentErrors,
                telefone: undefined
            }))
        }
    }

    return (
        <S.Form onSubmit={cadastrarContato} noValidate>
            <S.FieldGroup>
                <S.Label htmlFor="name">
                    Full name
                </S.Label>

                <S.Campo
                    id="name"
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={nome}
                    onChange={(event) =>
                        handleNameChange(event.target.value)
                    }
                    $hasError={Boolean(errors.nome)}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.nome)}
                    aria-describedby={
                        errors.nome ? 'name-error' : undefined
                    }
                />

                {errors.nome && (
                    <S.ErrorMessage id="name-error">
                        {errors.nome}
                    </S.ErrorMessage>
                )}
            </S.FieldGroup>

            <S.FieldGroup>
                <S.Label htmlFor="email">
                    Email address
                </S.Label>

                <S.Campo
                    id="email"
                    type="email"
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(event) =>
                        handleEmailChange(event.target.value)
                    }
                    onBlur={() =>
                        setEmail(normalizeEmail(email))
                    }
                    $hasError={Boolean(errors.email)}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                        errors.email ? 'email-error' : undefined
                    }
                />

                {errors.email && (
                    <S.ErrorMessage id="email-error">
                        {errors.email}
                    </S.ErrorMessage>
                )}
            </S.FieldGroup>

            <S.FieldGroup>
                <S.Label htmlFor="phone">
                    Phone number
                </S.Label>

                <S.Campo
                    id="phone"
                    type="tel"
                    placeholder="(21) 99999-9999"
                    value={telefone}
                    onChange={(event) =>
                        handlePhoneChange(event.target.value)
                    }
                    $hasError={Boolean(errors.telefone)}
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={Boolean(errors.telefone)}
                    aria-describedby={
                        errors.telefone ? 'phone-error' : undefined
                    }
                />

                {errors.telefone && (
                    <S.ErrorMessage id="phone-error">
                        {errors.telefone}
                    </S.ErrorMessage>
                )}
            </S.FieldGroup>

            <S.GrupoBotoes>
                <Botao type="submit">
                    Save contact
                </Botao>

                <Botao
                    variante="secundario"
                    onClick={() => navigate('/')}
                >
                    Cancel
                </Botao>
            </S.GrupoBotoes>
        </S.Form>
    )
}

export default Formulario