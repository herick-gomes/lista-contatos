import styled from 'styled-components'

import { cores } from '../../styles/variaveis'

type InputProps = {
  $hasError?: boolean
}

export const Card = styled.article`
  position: relative;

  min-width: 0;
  overflow: hidden;

  padding: 22px;

  border: 1px solid ${cores.borda};
  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      rgba(17, 26, 46, 0.82),
      rgba(10, 15, 30, 0.7)
    );

  backdrop-filter: blur(18px);

  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.025);

  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-3px);

    border-color: rgba(34, 211, 238, 0.22);

    box-shadow:
      0 24px 60px rgba(0, 0, 0, 0.2),
      0 0 30px rgba(34, 211, 238, 0.025);
  }
`

export const CardGlow = styled.div`
  position: absolute;

  width: 130px;
  height: 130px;

  top: -85px;
  right: -60px;

  pointer-events: none;

  border-radius: 50%;

  background: rgba(34, 211, 238, 0.12);

  filter: blur(28px);
`

export const ContactHeader = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  gap: 13px;

  margin-bottom: 22px;
`

export const Avatar = styled.div`
  display: grid;
  place-items: center;

  width: 46px;
  height: 46px;

  flex-shrink: 0;

  border: 1px solid rgba(129, 140, 248, 0.28);
  border-radius: 14px;

  background:
    linear-gradient(
      135deg,
      rgba(129, 140, 248, 0.18),
      rgba(34, 211, 238, 0.12)
    );

  color: ${cores.branco};

  font-size: 13px;
  font-weight: 800;

  letter-spacing: 0.5px;
`

export const ContactIdentity = styled.div`
  min-width: 0;
`

export const ContactLabel = styled.p`
  margin-bottom: 4px;

  color: #64748b;

  font-size: 9px;
  font-weight: 800;

  letter-spacing: 1.2px;
`

export const Nome = styled.h3`
  overflow: hidden;

  color: ${cores.texto};

  font-size: 16px;
  font-weight: 750;

  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StatusBadge = styled.span`
  display: flex;
  align-items: center;

  gap: 5px;

  margin-left: auto;
  padding: 5px 8px;

  border: 1px solid rgba(52, 211, 153, 0.12);
  border-radius: 999px;

  background: rgba(52, 211, 153, 0.05);

  color: #6ee7b7;

  font-size: 9px;
  font-weight: 700;
`

export const StatusDot = styled.span`
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #34d399;

  box-shadow: 0 0 8px rgba(52, 211, 153, 0.65);
`

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;

  gap: 9px;

  min-height: 88px;
`

export const DetailLink = styled.a`
  display: flex;
  align-items: center;

  gap: 10px;

  min-width: 0;

  padding: 10px 11px;

  border: 1px solid transparent;
  border-radius: 10px;

  color: ${cores.textoSecundario};

  font-size: 12px;

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;

  span {
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    border-color: ${cores.borda};

    background: rgba(255, 255, 255, 0.025);

    color: ${cores.branco};
  }
`

export const DetailIcon = styled.span`
  display: grid;
  place-items: center;

  flex-shrink: 0;

  color: ${cores.verde};
`

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;

  gap: 14px;
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: 6px;

  color: ${cores.cinzaClaro};

  font-size: 10px;
  font-weight: 700;
`

export const Campo = styled.input<InputProps>`
  width: 100%;
  min-height: 44px;

  padding: 0 12px;

  border: 1px solid
    ${({ $hasError }) =>
    $hasError
      ? 'rgba(251, 113, 133, 0.65)'
      : cores.borda};

  border-radius: 10px;

  outline: none;

  background: rgba(6, 9, 20, 0.66);
  color: ${cores.texto};

  font-size: 12px;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: ${({ $hasError }) =>
    $hasError
      ? cores.vermelho
      : cores.verde};

    box-shadow: 0 0 0 3px
      ${({ $hasError }) =>
    $hasError
      ? 'rgba(251, 113, 133, 0.07)'
      : 'rgba(34, 211, 238, 0.06)'};
  }
`

export const ErrorMessage = styled.span`
  margin-top: 5px;

  color: ${cores.vermelho};

  font-size: 10px;
  font-weight: 600;
`

export const Acoes = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-top: 20px;

  @media (max-width: 480px) {
    button {
      flex: 1;
      min-width: 0;
    }
  }
`