import styled from 'styled-components'
import { color, font, weight, spacing } from './variables'
import Link from 'gatsby-plugin-transition-link'

export const H1 = styled.h1`
  font-size: calc(1.4em + 1vw);
  line-height: 105%;
  color: ${color.primary};
  font-family: ${font.muli};
  font-weight: ${weight.black};
  letter-spacing: ${spacing.narrow};

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0.5em;
    font-size: calc(1.4em + 1.4vw);
  }
  @media only screen and (max-width: 824px){
    font-size: calc(1.4em + 2vw);
  }

  @media only screen and (max-width: 570px){
    font-size: calc(1.4em + 3.8vw);
  }

  @media only screen and (max-width: 321px){
    font-size: calc(1.4em + 2.5vw);
  }
}
`

export const H2Heebo = styled.h2`
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  color: ${color.secondary};
  text-transform: uppercase;
  font-size: calc(0.5em + 0.2vw);
  @media only screen and (max-width: 1024px) {
    margin-bottom: 0.9em;
    font-size: calc(0.3em + 1vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.3em + 1.5vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.3em + 2.5vw);
  }
`

export const H2Menu = styled.h2`
  font-family: ${font.muli};
  font-weight: ${weight.black};
  letter-spacing: ${spacing.narrow};
  font-size: calc(1.4em + 0.5vw);
  line-height: 105%;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0.5em;
    font-size: calc(1.4em + 1.4vw);
  }
  @media only screen and (max-width: 824px){
    font-size: calc(1.4em + 2vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(1.4em + 3.8vw);
  }

  @media only screen and (max-width: 321px){
    font-size: calc(1.4em + 2.5vw);
  }
`

export const H2Services = styled.h2`
  font-size: calc(0.3em + 0.55vw);
  font-style: italic;
  font-weight: ${weight.black};
  color: ${color.darkLink};
  letter-spacing: ${spacing.large};
  font-family: ${font.libre};
  margin-top: 1em;
  margin-bottom: 0.5em;

  @media only screen and (max-width: 1024px) {
   margin-bottom: 1em;
   font-size: calc(0.3em + 1.1vw);
  }

  @media only screen and (max-width: 824px){
    margin-bottom: 1.3em;
    font-size: calc(0.3em + 1.75vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.4em + 3.2vw);
  }
}
`
export const H3Built = styled.h3`
font-size: calc(0.3em + 0.55vw);
font-style: italic;
font-weight: ${weight.black};
color: ${color.darkLink};
letter-spacing: ${spacing.large};
font-family: ${font.libre};
margin-top: 1em;
margin-bottom: 1em;

@media only screen and (max-width: 1024px) {
 margin-bottom: 1em;
 font-size: calc(0.3em + 1.1vw);
}

@media only screen and (max-width: 824px){
  margin-bottom: 1.3em;
  font-size: calc(0.3em + 1.75vw);
}

@media only screen and (max-width: 520px){
  font-size: calc(0.4em + 3.2vw);
}

`

export const MainLink = styled(Link)`
  border: 0.2em solid ${color.secondary};
  text-transform: uppercase;
  font-family: ${font.heebo};
  color: ${color.primary};
  font-size: 0.6em;
  letter-spacing: ${spacing.wide};
  font-weight: ${weight.extraBold};
  line-height: 180%;
`

export const PortfolioLnk = styled(Link)`
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.black};
  letter-spacing: ${spacing.services};
  color: ${color.secondary};
  text-transform: uppercase;
  font-size: calc(0.40em + 0.1vw);

  @media only screen and (max-width: 1024px) {
   font-size: calc(0.4em + 0.54vw);
   letter-spacing: ${spacing.servicesTab};
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.4em + 0.8vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.4em + 2vw);
  }
`

export const ServiceNavLinks = styled(Link)`
  color: ${color.darkLinkO};
  font-family: ${font.muli};
  font-weight: ${weight.bold};
  font-size: 0.45em;
  letter-spacing: ${spacing.large};
  text-transform: uppercase;
  line-height: 100%;
`

const LandingLink = styled(MainLink)`
  position: absolute;
  z-index: 3;
  padding: 0.6em 0.9em;
  @media only screen and (max-width: 1024px) {
   display: none;
  }
`
export const Portfolio = styled(LandingLink)`
  top: 21vh;
  right: 23vw;
`
export const Services = styled(LandingLink)`
  bottom: 15vh;
  left: 35vw;
`


export const ListItem = styled.li`
  color: ${color.darkLinkO};
  font-family: ${font.muli};
  font-weight: ${weight.black};
  font-size: calc(0.38em + 0.1vw);
  letter-spacing: ${spacing.li};
  text-transform: uppercase;
  line-height: 130%;
  padding: 0.3em;
  list-style: none;

  @media only screen and (max-width: 1024px) {
   margin-bottom: 0.47em;
   font-size: calc(0.4em + 0.39vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.4em + 0.61vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.4em + 1.6vw);
  }
}
`

export const BodyText = styled.p`
  line-height: 140%;
  padding-bottom: 1em;
  color: ${color.darkLink};
  font-weight: ${weight.normal};
  font-size: calc(0.45em + 0.2vw);
  @media only screen and (max-width: 1024px) {
   font-size: calc(0.45em + 0.6vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.4em + 1.3vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.4em + 2.5vw);
    padding-bottom: 1.5em;
    line-height: 150%;
  }
}
`
