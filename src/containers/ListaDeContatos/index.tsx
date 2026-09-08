import { useEffect, useMemo, useState } from 'react'
import {
    Link,
    useLocation,
    useNavigate
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import Toast, {
    ToastType
} from '../../components/Toast'

import { RootReducer } from '../../store'
import { normalizePhone } from '../../utils/contactValidation'

import * as S from './styles'

type Notification = {
    message: string
    type: ToastType
}

type LocationState = {
    notification?: Notification
}

const ListaDeContatos = () => {
    const contatos = useSelector(
        (state: RootReducer) => state.contatos.itens
    )

    const location = useLocation()
    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [notification, setNotification] =
        useState<Notification | null>(null)

    useEffect(() => {
        const state = location.state as LocationState | null

        if (!state?.notification) {
            return
        }

        setNotification(state.notification)

        navigate(location.pathname, {
            replace: true,
            state: null
        })
    }, [
        location.pathname,
        location.state,
        navigate
    ])

    useEffect(() => {
        if (!notification) {
            return
        }

        const timeout = window.setTimeout(() => {
            setNotification(null)
        }, 3500)

        return () => {
            window.clearTimeout(timeout)
        }
    }, [notification])

    const filteredContacts = useMemo(() => {
        const normalizedSearch = search
            .trim()
            .toLowerCase()

        const phoneSearch = normalizePhone(search)

        return [...contatos]
            .filter((contato) => {
                if (!normalizedSearch) {
                    return true
                }

                const matchesName = contato.nome
                    .toLowerCase()
                    .includes(normalizedSearch)

                const matchesEmail = contato.email
                    .toLowerCase()
                    .includes(normalizedSearch)

                const matchesPhone =
                    phoneSearch.length > 0 &&
                    normalizePhone(contato.telefone).includes(
                        phoneSearch
                    )

                return (
                    matchesName ||
                    matchesEmail ||
                    matchesPhone
                )
            })
            .sort((a, b) =>
                a.nome.localeCompare(
                    b.nome,
                    undefined,
                    {
                        sensitivity: 'base'
                    }
                )
            )
    }, [contatos, search])

    const showNotification = (
        message: string,
        type: ToastType = 'success'
    ) => {
        setNotification({
            message,
            type
        })
    }

    const hasSearch = search.trim().length > 0

    return (
        <S.Container>
            {notification && (
                <Toast
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}

            <S.Content>
                <S.TopBar>
                    <div>
                        <S.Eyebrow>
                            CONTACT DATABASE
                        </S.Eyebrow>

                        <S.Titulo>People</S.Titulo>

                        <S.Subtitle>
                            Keep the people that matter organized and
                            easy to reach.
                        </S.Subtitle>
                    </div>

                    <S.HeaderStat>
                        <S.StatValue>
                            {contatos.length}
                        </S.StatValue>

                        <S.StatLabel>
                            {contatos.length === 1
                                ? 'saved contact'
                                : 'saved contacts'}
                        </S.StatLabel>
                    </S.HeaderStat>
                </S.TopBar>

                <S.Toolbar>
                    <S.SearchBox>
                        <S.SearchIcon aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                width="18"
                                height="18"
                            >
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="7"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />

                                <path
                                    d="M16.5 16.5L21 21"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </S.SearchIcon>

                        <S.SearchInput
                            type="search"
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                            placeholder="Search by name, email or phone..."
                            aria-label="Search contacts"
                        />

                        {search && (
                            <S.ClearSearch
                                type="button"
                                onClick={() => setSearch('')}
                                aria-label="Clear search"
                            >
                                ×
                            </S.ClearSearch>
                        )}
                    </S.SearchBox>

                    <S.ResultCount>
                        {filteredContacts.length}{' '}
                        {filteredContacts.length === 1
                            ? 'result'
                            : 'results'}
                    </S.ResultCount>
                </S.Toolbar>

                {filteredContacts.length > 0 ? (
                    <S.ContactGrid>
                        {filteredContacts.map((contato) => (
                            <Contato
                                key={contato.id}
                                contato={contato}
                                onNotify={showNotification}
                            />
                        ))}
                    </S.ContactGrid>
                ) : (
                    <S.EmptyState>
                        <S.EmptyIcon>
                            {hasSearch ? '⌕' : '+'}
                        </S.EmptyIcon>

                        <S.EmptyTitle>
                            {hasSearch
                                ? 'No contacts found'
                                : 'Your contact list is empty'}
                        </S.EmptyTitle>

                        <S.EmptyDescription>
                            {hasSearch
                                ? `We couldn't find anything matching "${search}".`
                                : 'Create your first contact to start building your personal network.'}
                        </S.EmptyDescription>

                        {hasSearch ? (
                            <S.EmptyAction
                                type="button"
                                onClick={() => setSearch('')}
                            >
                                Clear search
                            </S.EmptyAction>
                        ) : (
                            <Link to="/novo">
                                <S.EmptyAction type="button">
                                    Add first contact
                                </S.EmptyAction>
                            </Link>
                        )}
                    </S.EmptyState>
                )}
            </S.Content>
        </S.Container>
    )
}

export default ListaDeContatos