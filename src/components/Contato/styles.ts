import styled from 'styled-components'
import { cores } from '../../styles/variaveis'

export const Card = styled.div`
  background: ${cores.branco};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .08);

  transition: .2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,.12);
  }
`

export const Nome = styled.h3`
  color: ${cores.texto};
  margin-bottom: 12px;
`

export const Info = styled.p`
  color: ${cores.cinza};
  margin-bottom: 8px;
`

export const Campo = styled.input`
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 12px;

  border-radius: 8px;
  border: 1px solid ${cores.borda};

  font-size: 14px;

  transition: .2s;

  &:focus{
    outline:none;
    border-color:${cores.verde};
  }
`

export const Acoes = styled.div`
  display:flex;
  gap:10px;
  margin-top:20px;
`