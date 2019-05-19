import React from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import {
  MenuWrapper,
  MenuLinksWrapper,
  MenuLinksTitle,
  MenuList,
  Copyright
} from '../Global/MenuShared'
import { MenuLinks } from '../Global/nonTransitionLinks'

const MenuComponent = ({toggleHidden, links }) => {
  return (
    <>
    <MenuWrapper>
      <MenuLinksWrapper>
          <Fade right cascade >
            <MenuLinksTitle>Links</MenuLinksTitle>
          </Fade>
        {
          links.map(link => (
            <Fade right cascade delay={100} key={link.name}>
            <MenuList
              onClick={toggleHidden}>
             <MenuLinks
              to={link.link}
              partiallyActive={true}>
                {link.name}
              </MenuLinks>
            </MenuList>
            </Fade>
          ))
        }
      </MenuLinksWrapper>
    </MenuWrapper>
    <Copyright>© {new Date().getFullYear()} RKK Creative, all rights reserved </Copyright>
    </>
  )
}

export default MenuComponent

MenuComponent.propTypes = {
  links: PropTypes.array.isRequired,
  toggleHidden: PropTypes.func.isRequired,
}
