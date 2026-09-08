import { configureStore } from '@reduxjs/toolkit'

import Contato from '../models/Contato'
import contatosReducer from './reducers/contatos'

const CONTACTS_STORAGE_KEY = 'contact-manager:contacts'

const loadContacts = (): Contato[] | undefined => {
    if (typeof window === 'undefined') {
        return undefined
    }

    try {
        const storedContacts = window.localStorage.getItem(CONTACTS_STORAGE_KEY)

        if (!storedContacts) {
            return undefined
        }

        const parsedContacts = JSON.parse(storedContacts)

        if (!Array.isArray(parsedContacts)) {
            return undefined
        }

        return parsedContacts
    } catch (error) {
        console.error('Unable to load contacts from localStorage:', error)

        return undefined
    }
}

const storedContacts = loadContacts()

export const store = configureStore({
    reducer: {
        contatos: contatosReducer
    },
    preloadedState: storedContacts
        ? {
            contatos: {
                itens: storedContacts
            }
        }
        : undefined
})

store.subscribe(() => {
    if (typeof window === 'undefined') {
        return
    }

    try {
        const contacts = store.getState().contatos.itens

        window.localStorage.setItem(
            CONTACTS_STORAGE_KEY,
            JSON.stringify(contacts)
        )
    } catch (error) {
        console.error('Unable to save contacts to localStorage:', error)
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch