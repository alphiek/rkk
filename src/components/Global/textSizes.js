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

  @media only screen and (max-width: 520px){
    font-size: calc(1.4em + 3.5vw);
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
    font-size: calc(0.3em + 2.2vw);
  }
`

export const H2Services = styled.h2`
  font-size: calc(0.3em + 0.55vw);
  font-style: italic;
  font-weight: ${weight.black};
  color: ${color.primary};
  letter-spacing: ${spacing.large};
  font-family: ${font.libre};
  margin-top: 1em;
  margin-bottom: 1em;

  @media only screen and (max-width: 1024px) {
   margin-bottom: 1em;
   font-size: calc(0.3em + 1.3vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.3em + 2vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.4em + 3.5vw);
  }
}
`
export const H3Built = styled.h3`
  font-size: calc(0.3em + 0.6vw);
  font-style: italic;
  color: ${color.primary};
  letter-spacing: ${spacing.large};
  font-family: ${font.libre};
  margin-top: 1em;
  margin-bottom: 1em;

  @media only screen and (max-width: 1024px) {
   margin-bottom: 0.9em;
   font-size: calc(0.3em + 1.5vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.3em + 2vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.3em + 3vw);
  }
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
  letter-spacing: ${spacing.wide};
  color: ${color.primary};
  text-transform: uppercase;
  font-size: calc(0.40em + 0.08vw);

  @media only screen and (max-width: 1024px) {
   margin-bottom: 4em;
   font-size: calc(0.4em + 0.55vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.4em + 0.65vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.4em + 1.4vw);
  }
`

export const ListItem = styled.li`
  color: ${color.darkLink};
  font-family: ${font.muli};
  font-weight: ${weight.black};
  font-size: calc(0.38em + 0.1vw);
  letter-spacing: ${spacing.large};
  text-transform: uppercase;
  line-height: 130%;
  padding: 0.3em;
  list-style: none;

  @media only screen and (max-width: 1024px) {
   margin-bottom: 0.5em;
   font-size: calc(0.4em + 0.45vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.4em + 0.65vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.4em + 1.4vw);
  }
}
`

export const BodyText = styled.p`
  line-height: 140%;
  padding-bottom: 1em;
  color: ${color.body};
  font-weight: ${weight.normal};
  font-size: calc(0.45em + 0.2vw);
  @media only screen and (max-width: 1024px) {
   font-size: calc(0.45em + 0.65vw);
  }

  @media only screen and (max-width: 824px){
    font-size: calc(0.4em + 1.2vw);
  }

  @media only screen and (max-width: 520px){
    font-size: calc(0.4em + 1.6vw);
  }
}
`
