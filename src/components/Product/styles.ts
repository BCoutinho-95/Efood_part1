import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 8px;
  width: 100%;
  height: 338px;
  border-radius: 8px;

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  ${ButtonContainer} {
    width: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    img {
      width: 100%;
      height: 167px;
      object-fit: cover;
    }
  }
`
export const TitleCard = styled.h3`
  font-size: 16px;
  font-weight: 900;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  // padding-bottom: 8px;
`

export const ProductList = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.isVisible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }
`
export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  max-width: 1024px;
C
  height: 344px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  padding: 32px;
  header {
    img {
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }
  > img {
    width: 280px;
    height: 280px;
    margin-right: 32px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    width: 344px;
    height: 600px;
    flex-direction: column;
    align-items: center;

    > img {
    margin: 0;
    margin-bottom: 8px;
  }

  }
`
export const Description = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.branca};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: ${cores.branca};
    line-height: 22px;
    margin-top: 16px;
    margin-bottom: 27px;
  }
  ${ButtonContainer} {
    padding: 4px 7px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: justify;

      h4 {
        font-size: 14px;
      }
      p {
        font-size: 10px;
        font-weight: 400;
        color: ${cores.branca};
        line-height: 22px;
        margin-top: 16px;
        margin-bottom: 27px;
      }
    }

    ${ButtonContainer} {
      padding: 4px 7px;
    }
  }
`
