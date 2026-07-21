import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { RootReducer } from '../../store'

import * as S from './styles'

const ListaDeContatos = () => {
    const contatos = useSelector(
        (state: RootReducer) => state.contatos.itens
    )

    return (
        <S.Container>
            <S.Cabecalho>
                <S.Titulo>Lista de Contatos</S.Titulo>
            </S.Cabecalho>

            {contatos.map((contato) => (
                <Contato
                    key={contato.id}
                    contato={contato}
                />
            ))}
        </S.Container>
    )
}

export default ListaDeContatos