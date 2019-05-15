import styled from 'styled-components'
import { Link } from 'gatsby'
import { color, font, weight, spacing } from '../Global/variables'
import { H2Menu } from '../Global/textSizes'

export const MenuOuter = styled.nav`
  width: 30%;
  @media only screen and (max-width: 1024px){
    width: 100%;
    height: 100vh;
  }
`
export const MenuLinksWrapper = styled.div`
  border: 0.3em solid ${color.secondary};
  overflow: hidden;
  text-align: center;
  height: 25em;
  margin-left: 0.5em;
  padding: 1.8em;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
  }
`

export const MenuLinksTitle = styled(H2Menu)`
  color: #f9f9f9;
  border-bottom: 0.1em solid #f9f9f9;
  margin-bottom: 0.5em;
  padding-top: 0.1em;
  padding-bottom: 0.8em;
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
  font-size: 0.75em;
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
