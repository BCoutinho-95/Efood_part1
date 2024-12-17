import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const Prices = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.bege};
  margin-top: 40px;
  margin-bottom: 16px;

  span {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.bege};
    padding-left: 206px;
    white-space: nowrap;
  }
`

export const CartItem = styled.li`
  background-color: ${cores.bege};
  display: flex;
  height: 100px;
  width: 344px;
  position: relative;
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.vermelho};
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
  }

  span {
    display: block;
    color: ${cores.vermelho};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }

    button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
`
