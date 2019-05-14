import styled from 'styled-components'
import { Link } from 'gatsby'
import { color, font, weight } from './variables'

export const LogoLink = styled(Link)`
  font-family: ${font.muli};
  color: ${color.body};
  font-size: calc(0.7em + 0.45vw);
  font-weight: ${weight.black};
  border-bottom: 0.25em solid ${color.secondary};
  line-height: 130%;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0.9em;
    font-size: calc(0.7em + 1vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.7em + 1.8vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.7em + 2.5vw);
  }
}
`
export const BrowseLink = styled(Link)`
  font-size: calc(0.65em + 0.45vw);
  border: 0.2em solid ${color.secondary};
  font-weight: ${weight.black};
  font-family: ${font.muli};
  color: ${color.white};
  text-transform: uppercase;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0.9em;
    font-size: calc(0.65em + 1vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.65em + 1.8vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.65em + 2.5vw);
  }
`
