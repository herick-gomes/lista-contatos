import styled from 'styled-components'

import { cores } from '../../styles/variaveis'

export const Aside = styled.aside`
  width: 280px;
  min-height: 100vh;
  background: ${cores.sidebar};

  padding: 40px 24px;

  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h2`
  color: ${cores.texto};
  font-size: 28px;
  margin-bottom: 16px;
`

export const Total = styled.p`
  color: ${cores.cinza};
  margin-bottom: 32px;
`

export const BotaoNovo = styled.button`
  width: 100%;

  padding: 12px;

  border: none;

  border-radius: 8px;

  background: ${cores.verde};

  color: ${cores.branco};

  font-size: 16px;

  cursor: pointer;

  transition: .3s;

  &:hover {
    background: ${cores.verdeEscuro};
  }
`