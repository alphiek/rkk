import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { color, font, weight, spacing } from '../Global/variables'
import SocialButtons from '../Header/SocialButtons'
import Fade from 'react-reveal/Fade'

const MenuOuter = styled.nav`
  width: 28%;
  @media only screen and (max-width: 1024px) {
  width: 80%;
}
`
const MenuLinksWrapper = styled.div`
  text-align: center;
  height: 22em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  padding: 1.8em;
`
const MenuLinksTitle = styled.h2`
  font-size: 1.8em;
  color: ${color.white};
  border-bottom: 0.1em solid ${color.white};
  margin-bottom: 0.5em;
  padding-bottom: 0.8em;
  font-family: ${font.muli};
  font-weight: ${weight.extraBold};
  letter-spacing: ${spacing.narrow};
`
const MenuList = styled.li`
  list-style: none;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`

const MenuLinksItem = styled(Link)`
  font-size: 0.8em;
  font-family: ${font.heebo};
  letter-spacing: ${spacing.wide};
  text-transform: uppercase;
  color: ${color.secondary};
  font-weight: ${weight.black};
  line-height: 130%;
`
const TabletLinks = styled.button`
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

const MenuWrapper = (props) => {
  return (
    <MenuOuter>
      <MenuLinksWrapper>
      <Fade right>
        <MenuLinksTitle>Menu</MenuLinksTitle>
      </Fade>
        {
          props.compProps.links.map(link => (
            <Fade right cascade delay={100} key={link.name}>
            <MenuList
              onClick={props.toggleHidden}>
             <MenuLinksItem
              to={link.link}
              partiallyActive={true}>
                {link.name}
              </MenuLinksItem>
            </MenuList>
            </Fade>
          ))
        }
        {
         props.compProps.tablet || props.compProps.mobile ?
         <React.Fragment>
           <MenuList>
             <TabletLinks onClick={props.renderAbout}>About</TabletLinks>
           </MenuList>
           <MenuList>
             <TabletLinks onClick={props.renderContact}>Contact</TabletLinks>
           </MenuList>
           <SocialButtons />
           </React.Fragment>
           : null
        }
      </MenuLinksWrapper>
    </MenuOuter>
  )
}

export default MenuWrapper
