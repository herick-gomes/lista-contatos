import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Contato from '../../models/Contato'
import { adicionar } from '../../store/reducers/contatos'

import Botao from '../../components/Botao'

import * as S from './styles'

const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const cadastrarContato = (e: React.FormEvent) => {
        e.preventDefault()

        const novoContato = new Contato(
            nome,
            email,
            telefone,
            Math.floor(Math.random() * 100000)
        )

        dispatch(adicionar(novoContato))

        navigate('/')
    }

    return (
        <S.Form onSubmit={cadastrarContato}>
            <S.Campo
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <S.Campo
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <S.Campo
                type="text"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
            />

            <S.GrupoBotoes>
                <Botao type="submit">
                    Salvar
                </Botao>

                <Botao
                    variante="secundario"
                    onClick={() => navigate('/')}
                >
                    Cancelar
                </Botao>
            </S.GrupoBotoes>
        </S.Form>
    )
}

export default Formulario