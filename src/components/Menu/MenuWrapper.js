import React from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import {
  MenuOuter,
  MenuLinksWrapper,
  MenuLinksTitle,
  MenuList,
  MenuLinksItem,
} from './menuStyles'

const MenuWrapper = ({toggleHidden, links, children }) => {
  return (
    <MenuOuter>
      <MenuLinksWrapper>
          <Fade right>
            <MenuLinksTitle>Menu</MenuLinksTitle>
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
        {children}
      </MenuLinksWrapper>
    </MenuOuter>
  )
}

export default MenuWrapper

MenuWrapper.propTypes = {
  links: PropTypes.array.isRequired,
  toggleHidden: PropTypes.func.isRequired,
  children: PropTypes.node
}
