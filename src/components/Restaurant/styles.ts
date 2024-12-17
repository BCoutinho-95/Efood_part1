import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  color: ${cores.vermelho};
  border-right: 1px solid ${cores.vermelho};
  border-bottom: 1px solid ${cores.vermelho};
  border-left: 1px solid ${cores.vermelho};
  position: relative;
  width: 100%;
  height: 398px;

  > img {
    display: block;
    width: 100%;
    height: 217px;
  }
  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonLink} {
    position: absolute;
    margin-top: 16px;
    margin-bottom: 8px;
  }
`

export const CardSection = styled.div`
  margin-left: 8px;
  position: relative;
`
export const TitleCard = styled.h3`
  font-size: 18px;
  font-weight: 700;
  padding-top: 8px;
`
export const Descricao = styled.p`
  width: 100%;
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 10px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const Rate = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`
