import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 408px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    margin-right: 450px;
    margin-left: 450px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    justify-content: center;
    align-items: center;
    img {
      margin-top: 32px;
      margin-right: 245px;
      margin-left: 245px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
    img {
      margin-top: 32px;
      margin-right: 108px;
      margin-left: 108px;
    }
  }
`

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  margin-top: 139px;
  margin-bottom: 64px;
  padding-left: 242px;
  padding-right: 242px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 70px;
    margin-bottom: 32px;
    padding-left: 121px;
    padding-right: 121px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 60px;
    padding-right: 60px;
  }
`
// width: 640px;
// margin: 0px auto;
// font-size: 36px;
// font-weight: bold;
// text-align: center;
// line-height: 42px;
