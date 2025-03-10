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

  small {
    color: ${cores.bege};
    font-size: 12px;
    font-weight: bold;
    // margin-top: 5px;
    // margin-bottom: 5px;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 64px 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  .empty-text {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    color: ${cores.bege};
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${cores.bege};
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

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${cores.bege};
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  flex: auto; // O grupo de input ocupa o espaço disponível

  label {
    color: ${cores.bege}; // Cor do texto do label
    font-size: 14px; // Tamanho da fonte do label
    font-style: normal; // Estilo da fonte do label
    font-weight: 700; // Peso da fonte do label
    display: block; // Exibe o label como bloco
    margin: 8px 0;
  }

  input {
    margin: 8px 0;
    padding: 0 8px; // Espaçamento interno horizontal
    background-color: ${cores.bege}; // Cor de fundo do input
    height: 32px; // Altura do input
    border: 1px solid ${cores.bege}; // Borda do input
    width: 100%; // Largura total do input

      &.error {
      border: 2px solid red;
    }
  }
  }
`
export const Row = styled.div`
  display: flex;
  column-gap: 34px;
  align-items: flex-end;
  margin-bottom: 8px;
`

export const Buttons = styled.div`
  ${ButtonContainer} {
    margin-top: 8px;
    width: 100%;
  }
`

export const ContainerConfirmation = styled.div`
  color: ${cores.bege}; // Cor do texto
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px; // Tamanho da fonte
    font-weight: 400; // Peso da fonte
    line-height: 22px; // Altura da linha
  }

  ${ButtonContainer} {
    margin-top: 24px; // Espaçamento inferior
  }
`
