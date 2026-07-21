import styled from 'styled-components'
import { cores } from '../../styles/variaveis'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Campo = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${cores.borda};
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${cores.verde};
  }
`

export const GrupoBotoes = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`