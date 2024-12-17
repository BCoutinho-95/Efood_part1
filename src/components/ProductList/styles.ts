import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ProductListStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    row-gap: 32px;
    margin: 0;
    padding: 0 154px 0 154px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 32px;
    margin: 0;
    padding: 0;
  }
`
