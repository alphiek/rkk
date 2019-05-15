import React from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import {
  MenuOuter,
  MenuLinksWrapper,
  MenuLinksTitle,
  MenuList,
  MenuLinksItem,
} from '../Global/menuStyles'

const MenuComponent = ({toggleHidden, links }) => {
  return (
    <MenuOuter>
      <MenuLinksWrapper>
          <Fade right cascade >
            <MenuLinksTitle>Links</MenuLinksTitle>
          </Fade>
        {
          links.map(link => (
            <Fade right cascade delay={100} key={link.name}>
            <MenuList
              onClick={toggleHidden}>
             <MenuLinksItem
              to={link.link}
              partiallyActive={true}>
                {link.name}
              </MenuLinksItem>
            </MenuList>
            </Fade>
          ))
        }
      </MenuLinksWrapper>
    </MenuOuter>
  )
}

export default MenuComponent

MenuComponent.propTypes = {
  links: PropTypes.array.isRequired,
  toggleHidden: PropTypes.func.isRequired,
}
