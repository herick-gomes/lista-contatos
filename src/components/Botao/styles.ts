import styled from 'styled-components'

import { cores } from '../../styles/variaveis'

type Props = {
    variante?: 'primario' | 'secundario' | 'perigo'
}

export const Botao = styled.button<Props>`
  min-width: 108px;
  min-height: 39px;

  padding: 0 14px;

  border: 1px solid
    ${({ variante }) => {
        switch (variante) {
            case 'perigo':
                return 'rgba(251, 113, 133, 0.2)'

            case 'secundario':
                return cores.borda

            default:
                return 'rgba(34, 211, 238, 0.22)'
        }
    }};

  border-radius: 10px;

  background: ${({ variante }) => {
        switch (variante) {
            case 'perigo':
                return 'rgba(251, 113, 133, 0.07)'

            case 'secundario':
                return 'rgba(148, 163, 184, 0.06)'

            default:
                return 'rgba(34, 211, 238, 0.08)'
        }
    }};

  color: ${({ variante }) => {
        switch (variante) {
            case 'perigo':
                return cores.vermelho

            case 'secundario':
                return cores.cinzaClaro

            default:
                return cores.verde
        }
    }};

  font-size: 11px;
  font-weight: 800;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-1px);

    filter: brightness(1.15);
  }
`