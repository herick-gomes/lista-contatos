import { Link } from 'react-router-dom'

import Formulario from '../../containers/Formulario'

import * as S from './styles'

const Cadastro = () => {
    return (
        <S.Container>
            <S.Voltar>
                <Link to="/">
                    ← Voltar para lista de contatos
                </Link>
            </S.Voltar>

            <S.Titulo>
                Novo Contato
            </S.Titulo>

            <Formulario />
        </S.Container>
    )
}

export default Cadastro