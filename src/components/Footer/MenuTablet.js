import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import { TabletMenuLinks, MenuLinks } from '../Global/nonTransitionLinks'
import {
  MenuList,
  MenuWrapper,
  MenuLinksWrapper } from '../Global/MenuShared'

const MenuTablet = ({ renderAbout, renderContact, toggleHidden}) => {
  return (
    <MenuWrapper>
    <MenuLinksWrapper>
      <Fade cascade bottom>
      <MenuList
         key='Home'
         onClick={toggleHidden}>
          <MenuLinks
            to='/'
            partiallyActive={true}>Home</MenuLinks>
      </MenuList>

      <MenuList
        key='WebDesign'
        onClick={toggleHidden}>
          <MenuLinks
            to='/WebDesignPage'
            partiallyActive={true}>Web Design</MenuLinks>
      </MenuList>

      <MenuList
        key='Dev'
        onClick={toggleHidden}>
          <MenuLinks
            to='/DevelopmentPage'
            partiallyActive={true}>Development</MenuLinks>
      </MenuList>

      <MenuList
        key='Graphics'
        onClick={toggleHidden}>
          <MenuLinks
            to='/WebGraphicsPage'
            partiallyActive={true}>Web Graphics</MenuLinks>
      </MenuList>

      <MenuList
        key='SEO'
        onClick={toggleHidden}>
          <MenuLinks
            to='/SeoOptPage'
            partiallyActive={true}>SEO</MenuLinks>
      </MenuList>

      <MenuList
        key='Portfolio'
        onClick={toggleHidden}>
          <MenuLinks
            to='/PortfolioPage'
            partiallyActive={true}>Portfolio</MenuLinks>
      </MenuList>

      <MenuList
        key='About'>
          <TabletMenuLinks onClick={renderAbout}>About</TabletMenuLinks>
      </MenuList>

      <MenuList
         key='Contact'>
          <TabletMenuLinks onClick={renderContact}>Contact</TabletMenuLinks>
      </MenuList>
      </Fade>
      </MenuLinksWrapper>
    </MenuWrapper>
  )
}

export default MenuTablet

MenuTablet.propTypes = {
  renderAbout: PropTypes.func.isRequired,
  renderContact: PropTypes.func.isRequired,
  toggleHidden: PropTypes.func.isRequired
}
