import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding-top: 56px;
`
export const Modal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 344px;
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;

  header {
    img {
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }

  h4 {
    display: flex;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    // text-align: center;
  }
`
export const Pizzaimage = styled.img`
  width: 280px;
  height: 280px;
  margin-left: 32px;
  margin-top: 32px;
  margin-right: 24px;
  margin-bottom: 32px;
`
export const Description = styled.p`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400px;
  line-height: 22px;
  font: Roboto;
  margin-right: 32px;

  h4 {
    margin-bottom: 16px;
    margin-top: -50px;
  }
`

export const ButtonModal = styled.button`
  display: block;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  width: 218px;
  height: 24px;
  top: 4px;
  left: 6.95px;
  gap: 0px;
  opacity: 0px;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  border: none;
  margin-top: 16px;
`
