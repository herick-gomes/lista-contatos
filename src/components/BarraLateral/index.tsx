import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import * as S from './styles'

const BarraLateral = () => {
    const contatos = useSelector(
        (state: RootReducer) => state.contatos.itens
    )

    const contactLabel =
        contatos.length === 1 ? 'contact' : 'contacts'

    return (
        <S.Aside>
            <S.Brand to="/">
                <S.BrandMark>CM</S.BrandMark>

                <S.BrandText>
                    <strong>Contact Manager</strong>
                    <span>Personal workspace</span>
                </S.BrandText>
            </S.Brand>

            <S.Navigation>
                <S.NavLabel>Workspace</S.NavLabel>

                <S.NavItem $active>
                    <S.NavIcon>⌂</S.NavIcon>

                    <span>All contacts</span>

                    <S.NavCount>{contatos.length}</S.NavCount>
                </S.NavItem>
            </S.Navigation>

            <S.Overview>
                <S.OverviewLabel>Overview</S.OverviewLabel>

                <S.OverviewNumber>{contatos.length}</S.OverviewNumber>

                <S.OverviewText>
                    {contactLabel} safely stored on this device
                </S.OverviewText>
            </S.Overview>

            <Link to="/novo">
                <S.BotaoNovo type="button">
                    <S.PlusIcon>+</S.PlusIcon>
                    Add new contact
                </S.BotaoNovo>
            </Link>

            <S.FooterNote>
                <S.StatusDot />
                Local data protection
            </S.FooterNote>
        </S.Aside>
    )
}

export default BarraLateral