import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;

  a {
    color: ${cores.vermelho};
    text-decoration: none;
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    margin-top: 83px;
    margin-bottom: 83px;
  }

  div {
    display: flex;
    align-items: center;
    img {
      margin-top: 65px;
      margin-bottom: 65px;
      margin-left: 341px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        margin: 0;
      }
    }

    @media (max-width: ${breakpoints.tablet}) {
    img {
    padding-left: 12px;
    padding-right: 12px;
    }

      a {
    font-size: 14px;
  }
`

export const Links = styled.ul`
  display: flex;
`

export const LinkCart = styled.a`
  display: flex;
  margin-left: 193px;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0;
  }
`
