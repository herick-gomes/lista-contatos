import styled from 'styled-components'
import { cores } from '../../styles/variaveis'

type Props = {
    variante?: 'primario' | 'secundario' | 'perigo'
}

export const Botao = styled.button<Props>`
  min-width: 110px;
  height: 42px;

  padding: 0 16px;

  border: none;
  border-radius: 8px;

  cursor: pointer;

  font-size: 14px;
  font-weight: bold;

  color: ${cores.branco};

  transition: .2s;

  background-color: ${({ variante }) => {
        switch (variante) {
            case 'perigo':
                return cores.vermelho

            case 'secundario':
                return cores.cinza

            default:
                return cores.verde
        }
    }};

  &:hover{
    transform: translateY(-1px);
    opacity:.95;
  }
`