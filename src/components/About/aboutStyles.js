import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'
import { H2Menu } from '../Global/textSizes'

export const PageWrapper = styled.div`
  width: 30%;
  @media only screen and (max-width: 1024px){
    width: 100%;
  }
`
export const AboutWrapper = styled.div`
  border: 0.3em solid #f9f9f9;
  height: 25em;
  margin-right: 0.5em;
  padding: 1.8em;
  overflow: hidden;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
`
export const AboutTitle = styled(H2Menu)`
  color: ${color.secondary};
`
export const AboutText = styled.p`
  margin-top: 2em;
  color: ${color.white};
  line-height: 140%;
  font-weight: ${weight.normal};
  font-size: calc(0.45em + 0.2vw);
  @media only screen and (max-width: 1024px) {
   font-size: calc(0.45em + 0.6vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.4em + 1.3vw);
  }

  @media only screen and (max-width: 570px){
    font-size: calc(0.4em + 2.5vw);
    padding-bottom: 1.5em;
    line-height: 150%;
  }
`
export const Copyright = styled.p`
  font-weight: ${weight.light};
  position: absolute;
  bottom: 3em;
  left: 7em;
  font-size: 0.5em;
  color: ${color.white};
`
