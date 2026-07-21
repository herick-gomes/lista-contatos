import BarraLateral from '../../components/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

import * as S from './styles'

const Home = () => {
    return (
        <S.Container>
            <BarraLateral />

            <ListaDeContatos />
        </S.Container>
    )
}

export default Home