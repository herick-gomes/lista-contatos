import styled, { keyframes } from 'styled-components'

import { cores } from '../../styles/variaveis'
import { ToastType } from '.'

type TypeProps = {
    $type: ToastType
}

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(24px, 0, 0) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`

const progress = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
`

export const Container = styled.div<TypeProps>`
  position: fixed;
  z-index: 1000;

  top: 24px;
  right: 24px;

  display: flex;
  align-items: center;

  gap: 12px;

  width: min(390px, calc(100% - 32px));

  padding: 14px 42px 14px 14px;

  overflow: hidden;

  border: 1px solid
    ${({ $type }) =>
        $type === 'success'
            ? 'rgba(52, 211, 153, 0.22)'
            : 'rgba(251, 113, 133, 0.22)'};

  border-radius: 15px;

  background:
    linear-gradient(
      145deg,
      rgba(17, 26, 46, 0.97),
      rgba(9, 14, 29, 0.97)
    );

  backdrop-filter: blur(24px);

  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);

  animation: ${slideIn} 0.25s ease;

  @media (max-width: 520px) {
    top: 16px;
    right: 16px;

    width: calc(100% - 32px);
  }
`

export const Icon = styled.div<TypeProps>`
  display: grid;
  place-items: center;

  width: 38px;
  height: 38px;

  flex-shrink: 0;

  border: 1px solid
    ${({ $type }) =>
        $type === 'success'
            ? 'rgba(52, 211, 153, 0.2)'
            : 'rgba(251, 113, 133, 0.2)'};

  border-radius: 11px;

  background: ${({ $type }) =>
        $type === 'success'
            ? 'rgba(52, 211, 153, 0.07)'
            : 'rgba(251, 113, 133, 0.07)'};

  color: ${({ $type }) =>
        $type === 'success'
            ? '#34d399'
            : cores.vermelho};
`

export const Content = styled.div`
  min-width: 0;
`

export const Label = styled.strong`
  display: block;

  margin-bottom: 3px;

  color: ${cores.texto};

  font-size: 11px;
  font-weight: 800;
`

export const Message = styled.p`
  overflow: hidden;

  color: ${cores.textoSecundario};

  font-size: 10px;
  line-height: 1.5;

  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CloseButton = styled.button`
  position: absolute;

  top: 10px;
  right: 10px;

  width: 28px;
  height: 28px;

  border: 0;
  border-radius: 8px;

  background: transparent;

  color: #64748b;

  font-size: 18px;
  line-height: 1;

  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);

    color: ${cores.branco};
  }
`

export const Progress = styled.div<TypeProps>`
  position: absolute;

  bottom: 0;
  left: 0;

  height: 2px;

  background: ${({ $type }) =>
        $type === 'success'
            ? '#34d399'
            : cores.vermelho};

  animation: ${progress} 3.5s linear forwards;
`