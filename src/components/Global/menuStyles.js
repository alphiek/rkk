import styled from 'styled-components'
import { Link } from 'gatsby'
import { color, font, weight, spacing } from '../Global/variables'

export const MenuOuter = styled.nav`
  width: 28%;
  @media only screen and (max-width: 1024px){
    width: 100%;
    height: 100vh;
  }
`
export const MenuLinksWrapper = styled.div`
  text-align: center;
  height: 22em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  padding: 1.8em;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
  }
`

export const MenuLinksTitle = styled.h2`
  font-size: 1.6em;
  color: ${color.white};
  border-bottom: 0.1em solid ${color.white};
  margin-bottom: 0.5em;
  padding-bottom: 0.8em;
  font-family: ${font.muli};
  font-weight: ${weight.extraBold};
  letter-spacing: ${spacing.narrow};
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`
export const MenuList = styled.li`
  list-style: none;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  @media only screen and (max-width: 1024px) {
    padding: 0.8em 0;
  }
`

export const MenuLinksItem = styled(Link)`
  font-size: 0.7em;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  text-transform: uppercase;
  color: ${color.secondary};
  font-weight: ${weight.black};
  line-height: 130%;

  @media only screen and (max-width: 1024px) {
    font-size: 1em;
  }
`

export const TabletLinks = styled.button`
  font-size: 1em;
  font-family: ${font.heebo};
  letter-spacing: ${spacing.wide};
  text-transform: uppercase;
  color: ${color.secondary};
  font-weight: ${weight.black};
  line-height: 130%;
  background-color: transparent;
  border: none;
`
