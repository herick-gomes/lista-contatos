import { ReactNode } from 'react'

import * as S from './styles'

type Props = {
    children: ReactNode
    onClick?: () => void
    type?: 'button' | 'submit'
    variante?: 'primario' | 'secundario' | 'perigo'
}

const Botao = ({
    children,
    onClick,
    type = 'button',
    variante = 'primario'
}: Props) => {
    return (
        <S.Botao
            type={type}
            onClick={onClick}
            variante={variante}
        >
            {children}
        </S.Botao>
    )
}

export default Botao