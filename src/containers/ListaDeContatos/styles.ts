import styled from 'styled-components'
import { cores } from '../../styles/variaveis'

export const Container = styled.main`
  flex: 1;
  min-height: 100vh;
  background-color: ${cores.fundo};
  padding: 40px;
`

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`

export const Titulo = styled.h1`
  font-size: 30px;
  color: ${cores.texto};
`