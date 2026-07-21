import { useState } from 'react'
import { useDispatch } from 'react-redux'

import ContatoModel from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'

import Botao from '../Botao'
import * as S from './styles'

type Props = {
    contato: ContatoModel
}

const Contato = ({ contato }: Props) => {
    const dispatch = useDispatch()

    const [estaEditando, setEstaEditando] = useState(false)

    const [nome, setNome] = useState(contato.nome)
    const [email, setEmail] = useState(contato.email)
    const [telefone, setTelefone] = useState(contato.telefone)

    const salvarEdicao = () => {
        dispatch(
            editar(
                new ContatoModel(
                    nome,
                    email,
                    telefone,
                    contato.id
                )
            )
        )

        setEstaEditando(false)
    }

    const cancelarEdicao = () => {
        setNome(contato.nome)
        setEmail(contato.email)
        setTelefone(contato.telefone)

        setEstaEditando(false)
    }

    return (
        <S.Card>
            {estaEditando ? (
                <>
                    <S.Campo
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <S.Campo
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <S.Campo
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <S.Nome>{nome}</S.Nome>

                    <S.Info>{email}</S.Info>

                    <S.Info>{telefone}</S.Info>
                </>
            )}

            <S.Acoes>
                {estaEditando ? (
                    <>
                        <Botao onClick={salvarEdicao}>
                            Salvar
                        </Botao>

                        <Botao
                            variante="secundario"
                            onClick={cancelarEdicao}
                        >
                            Cancelar
                        </Botao>
                    </>
                ) : (
                    <>
                        <Botao
                            onClick={() => setEstaEditando(true)}
                        >
                            Editar
                        </Botao>

                        <Botao
                            variante="perigo"
                            onClick={() => dispatch(remover(contato.id))}
                        >
                            Remover
                        </Botao>
                    </>
                )}
            </S.Acoes>
        </S.Card>
    )
}

export default Contato