import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ContatoModel from '../../models/Contato'
import { RootReducer } from '../../store'
import { editar, remover } from '../../store/reducers/contatos'
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

import Botao from '../Botao'
import { ToastType } from '../Toast'

import * as S from './styles'

type Props = {
    contato: ContatoModel
    onNotify: (
        message: string,
        type?: ToastType
    ) => void
}

type FormErrors = {
    nome?: string
    email?: string
    telefone?: string
}

const Contato = ({
    contato,
    onNotify
}: Props) => {
    const dispatch = useDispatch()

    const contatos = useSelector(
        (state: RootReducer) => state.contatos.itens
    )

    const [estaEditando, setEstaEditando] =
        useState(false)

    const [nome, setNome] =
        useState(contato.nome)

    const [email, setEmail] =
        useState(contato.email)

    const [telefone, setTelefone] =
        useState(contato.telefone)

    const [errors, setErrors] =
        useState<FormErrors>({})

    const initials = contato.nome
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) =>
            part.charAt(0).toUpperCase()
        )
        .join('')

    const validateEdit = () => {
        const newErrors: FormErrors = {}

        const otherContacts = contatos.filter(
            (item) => item.id !== contato.id
        )

        const normalizedName =
            normalizeName(nome)

        const normalizedEmail =
            normalizeEmail(email)

        const normalizedPhone =
            normalizePhone(telefone)

        if (!isValidName(nome)) {
            newErrors.nome =
                'Enter at least 2 characters.'
        } else if (
            otherContacts.some(
                (item) =>
                    normalizeName(item.nome) ===
                    normalizedName
            )
        ) {
            newErrors.nome =
                'Another contact already uses this name.'
        }

        if (!isValidEmail(email)) {
            newErrors.email =
                'Enter a valid email address.'
        } else if (
            otherContacts.some(
                (item) =>
                    normalizeEmail(item.email) ===
                    normalizedEmail
            )
        ) {
            newErrors.email =
                'Another contact already uses this email.'
        }

        if (!isValidPhone(telefone)) {
            newErrors.telefone =
                'Enter a valid phone number.'
        } else if (
            otherContacts.some(
                (item) =>
                    normalizePhone(item.telefone) ===
                    normalizedPhone
            )
        ) {
            newErrors.telefone =
                'Another contact already uses this phone number.'
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const salvarEdicao = () => {
        if (!validateEdit()) {
            return
        }

        const cleanNome =
            cleanName(nome)

        const cleanEmail =
            normalizeEmail(email)

        const cleanTelefone =
            formatPhone(telefone)

        dispatch(
            editar(
                new ContatoModel(
                    cleanNome,
                    cleanEmail,
                    cleanTelefone,
                    contato.id
                )
            )
        )

        setNome(cleanNome)
        setEmail(cleanEmail)
        setTelefone(cleanTelefone)

        setErrors({})
        setEstaEditando(false)

        onNotify(
            `${cleanNome}'s contact details were updated.`
        )
    }

    const cancelarEdicao = () => {
        setNome(contato.nome)
        setEmail(contato.email)
        setTelefone(contato.telefone)

        setErrors({})
        setEstaEditando(false)
    }

    const removerContato = () => {
        const shouldRemove = window.confirm(
            `Remove ${contato.nome} from your contacts?`
        )

        if (!shouldRemove) {
            return
        }

        dispatch(remover(contato.id))

        onNotify(
            `${contato.nome} was removed from your contacts.`,
            'danger'
        )
    }

    const clearError = (
        field: keyof FormErrors
    ) => {
        if (!errors[field]) {
            return
        }

        setErrors((currentErrors) => ({
            ...currentErrors,
            [field]: undefined
        }))
    }

    return (
        <S.Card>
            <S.CardGlow />

            <S.ContactHeader>
                <S.Avatar>
                    {initials || '?'}
                </S.Avatar>

                <S.ContactIdentity>
                    <S.ContactLabel>
                        CONTACT
                    </S.ContactLabel>

                    {!estaEditando && (
                        <S.Nome>
                            {contato.nome}
                        </S.Nome>
                    )}
                </S.ContactIdentity>

                {!estaEditando && (
                    <S.StatusBadge>
                        <S.StatusDot />
                        Saved
                    </S.StatusBadge>
                )}
            </S.ContactHeader>

            {estaEditando ? (
                <S.EditForm>
                    <S.FieldGroup>
                        <S.Label
                            htmlFor={`name-${contato.id}`}
                        >
                            Full name
                        </S.Label>

                        <S.Campo
                            id={`name-${contato.id}`}
                            type="text"
                            value={nome}
                            onChange={(event) => {
                                setNome(event.target.value)
                                clearError('nome')
                            }}
                            $hasError={Boolean(errors.nome)}
                            autoComplete="name"
                        />

                        {errors.nome && (
                            <S.ErrorMessage>
                                {errors.nome}
                            </S.ErrorMessage>
                        )}
                    </S.FieldGroup>

                    <S.FieldGroup>
                        <S.Label
                            htmlFor={`email-${contato.id}`}
                        >
                            Email address
                        </S.Label>

                        <S.Campo
                            id={`email-${contato.id}`}
                            type="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                                clearError('email')
                            }}
                            onBlur={() =>
                                setEmail(
                                    normalizeEmail(email)
                                )
                            }
                            $hasError={Boolean(errors.email)}
                            autoComplete="email"
                        />

                        {errors.email && (
                            <S.ErrorMessage>
                                {errors.email}
                            </S.ErrorMessage>
                        )}
                    </S.FieldGroup>

                    <S.FieldGroup>
                        <S.Label
                            htmlFor={`phone-${contato.id}`}
                        >
                            Phone number
                        </S.Label>

                        <S.Campo
                            id={`phone-${contato.id}`}
                            type="tel"
                            value={telefone}
                            onChange={(event) => {
                                setTelefone(
                                    formatPhone(
                                        event.target.value
                                    )
                                )

                                clearError('telefone')
                            }}
                            $hasError={Boolean(
                                errors.telefone
                            )}
                            autoComplete="tel"
                            inputMode="tel"
                        />

                        {errors.telefone && (
                            <S.ErrorMessage>
                                {errors.telefone}
                            </S.ErrorMessage>
                        )}
                    </S.FieldGroup>
                </S.EditForm>
            ) : (
                <S.ContactDetails>
                    <S.DetailLink
                        href={`mailto:${contato.email}`}
                    >
                        <S.DetailIcon>
                            <svg
                                viewBox="0 0 24 24"
                                width="17"
                                height="17"
                                fill="none"
                            >
                                <rect
                                    x="3"
                                    y="5"
                                    width="18"
                                    height="14"
                                    rx="3"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                />

                                <path
                                    d="M4 7l8 6 8-6"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                />
                            </svg>
                        </S.DetailIcon>

                        <span>
                            {contato.email}
                        </span>
                    </S.DetailLink>

                    <S.DetailLink
                        href={`tel:${normalizePhone(
                            contato.telefone
                        )}`}
                    >
                        <S.DetailIcon>
                            <svg
                                viewBox="0 0 24 24"
                                width="17"
                                height="17"
                                fill="none"
                            >
                                <path
                                    d="M6.8 3.5l2.3 4.2-1.7 2.1c1 2.3 2.8 4.1 5.1 5.1l2.1-1.7 4.2 2.3c.4.2.6.7.4 1.1l-1 3c-.1.4-.5.7-1 .7C9.7 20.3 3.7 14.3 3.7 6.8c0-.5.3-.9.7-1l3-1c.5-.2 1 .1 1.2.5"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </S.DetailIcon>

                        <span>
                            {contato.telefone}
                        </span>
                    </S.DetailLink>
                </S.ContactDetails>
            )}

            <S.Acoes>
                {estaEditando ? (
                    <>
                        <Botao onClick={salvarEdicao}>
                            Save changes
                        </Botao>

                        <Botao
                            variante="secundario"
                            onClick={cancelarEdicao}
                        >
                            Cancel
                        </Botao>
                    </>
                ) : (
                    <>
                        <Botao
                            onClick={() =>
                                setEstaEditando(true)
                            }
                        >
                            Edit contact
                        </Botao>

                        <Botao
                            variante="perigo"
                            onClick={removerContato}
                        >
                            Remove
                        </Botao>
                    </>
                )}
            </S.Acoes>
        </S.Card>
    )
}

export default Contato