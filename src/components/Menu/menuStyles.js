import styled from 'styled-components'
import { Link } from 'gatsby'
import { color, font, weight, spacing } from '../Global/variables'

export const MenuOuter = styled.nav`
  width: 28%;
  @media only screen and (max-width: 1024px){
    width: 100%;
  }
`
export const MenuLinksWrapper = styled.div`
  text-align: center;
  height: 22em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  padding: 1.8em;
`
export const MenuLinksTitle = styled.h2`
  font-size: 1.8em;
  color: ${color.white};
  border-bottom: 0.1em solid ${color.white};
  margin-bottom: 0.5em;
  padding-bottom: 0.8em;
  font-family: ${font.muli};
  font-weight: ${weight.extraBold};
  letter-spacing: ${spacing.narrow};
`
export const MenuList = styled.li`
  list-style: none;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`

export const MenuLinksItem = styled(Link)`
  font-size: 0.8em;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  text-transform: uppercase;
  color: ${color.secondary};
  font-weight: ${weight.black};
  line-height: 130%;
`

export const TabletLinks = styled.button`
  font-size: 0.8em;
  font-family: ${font.heebo};
  letter-spacing: ${spacing.wide};
  text-transform: uppercase;
  color: ${color.secondary};
  font-weight: ${weight.black};
  line-height: 130%;
  background-color: transparent;
  border: none;
`
