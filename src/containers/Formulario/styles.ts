import styled from 'styled-components'

import { cores } from '../../styles/variaveis'

type InputProps = {
  $hasError?: boolean
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 19px;
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: 7px;

  color: ${cores.cinzaClaro};

  font-size: 11px;
  font-weight: 700;
`

export const Campo = styled.input<InputProps>`
  width: 100%;
  min-height: 50px;

  padding: 0 14px;

  border: 1px solid
    ${({ $hasError }) =>
    $hasError
      ? 'rgba(251, 113, 133, 0.65)'
      : cores.borda};

  border-radius: 12px;

  outline: none;

  background: rgba(6, 9, 20, 0.68);
  color: ${cores.texto};

  font-size: 13px;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    border-color: ${({ $hasError }) =>
    $hasError
      ? cores.vermelho
      : cores.verde};

    background: rgba(6, 9, 20, 0.9);

    box-shadow: 0 0 0 4px
      ${({ $hasError }) =>
    $hasError
      ? 'rgba(251, 113, 133, 0.06)'
      : 'rgba(34, 211, 238, 0.05)'};
  }
`

export const ErrorMessage = styled.span`
  margin-top: 6px;

  color: ${cores.vermelho};

  font-size: 10px;
  font-weight: 600;
`

export const GrupoBotoes = styled.div`
  display: flex;

  gap: 10px;

  margin-top: 7px;

  @media (max-width: 480px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`