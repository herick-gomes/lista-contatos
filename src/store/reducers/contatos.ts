import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        new Contato(
            'Herick Gomes',
            'hrckgomes@gmail.com',
            '(21) 99999-9999',
            1
        ),
        new Contato(
            'João Silva',
            'joao@email.com',
            '(11) 98888-8888',
            2
        )
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Contato>) => {
            state.itens.push(action.payload)
        },

        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter(
                (contato) => contato.id !== action.payload
            )
        },

        editar: (state, action: PayloadAction<Contato>) => {
            const index = state.itens.findIndex(
                (contato) => contato.id === action.payload.id
            )

            if (index >= 0) {
                state.itens[index] = action.payload
            }
        }
    }
})

export const { adicionar, remover, editar } = contatosSlice.actions

export default contatosSlice.reducer