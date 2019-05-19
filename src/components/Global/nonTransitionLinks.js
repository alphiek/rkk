import styled from 'styled-components'
import { Link } from 'gatsby'
import { color, font, weight, spacing } from './variables'

export const LogoLink = styled(Link)`
  font-family: ${font.muli};
  color: #2c2c2c;
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

  @media only screen and (max-width: 570px){
    font-size: calc(0.7em + 2.5vw);
  }
}
`
export const BrowseLink = styled.p`
  font-size: calc(0.65em + 0.45vw);
  border: 0.2em solid ${color.secondary};
  font-weight: ${weight.black};
  font-family: ${font.muli};
  color: ${color.white};
  text-transform: uppercase;

  @media only screen and (max-width: 1024px) {
    font-size: calc(0.65em + 1vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.65em + 1.8vw);
  }

  @media only screen and (max-width: 570px){
    font-size: calc(0.65em + 2.5vw);
  }
`

export const PortfolioPageLnk = styled.p`
  align-self: flex-start;
  margin-left: 4em;
  margin-top: 1.5em;
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.extraBold};
  letter-spacing: ${spacing.li};
  color: ${color.darkLink};
  text-transform: uppercase;
  font-size: calc(0.40em + 0.1vw);
  transition: 200ms ease-out;
  &: hover {
    color: ${color.secondary};
  }

  @media only screen and (max-width: 1024px) {
   align-self: flex-end;
   font-size: calc(0.4em + 0.54vw);
   letter-spacing: ${spacing.servicesTab};
  }

  @media only screen and (max-width: 824px){
    margin-top: 6em;
    font-size: calc(0.4em + 0.8vw);
  }

  @media only screen and (max-width: 570px){
    align-self: center;
    font-size: calc(0.4em + 2vw);
    margin-top: 3.5em;
    margin-left: 0;
  }
`

export const MenuLinks = styled(Link)`
  font-size: calc(0.5em + 0.4vw);
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.servicesTab};
  text-transform: uppercase;
  color: ${color.secondary};
  font-weight: ${weight.black};
  line-height: 130%;

  @media only screen and (max-width: 1024px) {
    color: ${color.offWhite};
    font-size: calc(0.5em + 0.8vw);
    width: 100%;
    height:100%;
    &: hover {
      color: ${color.secondary};
    }
    @media only screen and (max-width: 824px){
      font-size: calc(0.4em + 1.7vw);
    }

    @media only screen and (max-width: 570px){
      font-size: calc(0.4em + 2.5vw);
    }
  }
`

export const TabletMenuLinks = styled.button`
  font-size: calc(0.5em + 0.4vw);
  font-family: ${font.heebo};
  letter-spacing: ${spacing.servicesTab};
  text-transform: uppercase;
  color: ${color.secondary};
  font-weight: ${weight.black};
  line-height: 130%;
  background-color: transparent;
  border: none;
  @media only screen and (max-width: 1024px) {
    font-size: calc(0.5em + 0.8vw);
    color: ${color.offWhite};
    &: hover {
      color: ${color.secondary};
    }
    @media only screen and (max-width: 824px){
      font-size: calc(0.4em + 1.7vw);
    }

    @media only screen and (max-width: 570px){
      font-size: calc(0.4em + 2.5vw);
    }
  }
`
