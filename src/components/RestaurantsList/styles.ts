import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  margin: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 40px 0;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
