import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 290px minmax(0, 1fr);

  min-height: 100vh;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`