import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import * as S from './styles'

const BarraLateral = () => {
    const contatos = useSelector(
        (state: RootReducer) => state.contatos.itens
    )

    return (
        <S.Aside>
            <S.Titulo>Contatos</S.Titulo>

            <S.Total>
                {contatos.length} contato(s)
            </S.Total>

            <Link to="/novo">
                <S.BotaoNovo>
                    Novo Contato
                </S.BotaoNovo>
            </Link>
        </S.Aside>
    )
}

export default BarraLateral