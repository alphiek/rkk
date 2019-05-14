import React from 'react'
import PropTypes from 'prop-types'
import { TabletLinks, MenuList, MenuLinksItem } from '../Global/menuStyles'

const MenuTablet = ({ renderAbout, renderContact, toggleHidden}) => {
  return (
    <ol>
      <MenuList
         key='Home'
         onClick={toggleHidden}>
          <MenuLinksItem
            to='/'
            partiallyActive={true}>Home</MenuLinksItem>
      </MenuList>

      <MenuList
        key='WebDesign'
        onClick={toggleHidden}>
          <MenuLinksItem
            to='/WebDesignPage'
            partiallyActive={true}>WebDesign</MenuLinksItem>
      </MenuList>

      <MenuList
        key='Dev'
        onClick={toggleHidden}>
          <MenuLinksItem
            to='/DevelopmentPage'
            partiallyActive={true}>Development</MenuLinksItem>
      </MenuList>

      <MenuList
        key='Graphics'
        onClick={toggleHidden}>
          <MenuLinksItem
            to='/WebGraphicsPage'
            partiallyActive={true}>Web Graphics</MenuLinksItem>
      </MenuList>

      <MenuList
        key='SEO'
        onClick={toggleHidden}>
          <MenuLinksItem
            to='/SeoOptPage'
            partiallyActive={true}>SEO</MenuLinksItem>
      </MenuList>

      <MenuList
        key='Portfolio'
        onClick={toggleHidden}>
          <MenuLinksItem
            to='/PortfolioPage'
            partiallyActive={true}>Portfolio</MenuLinksItem>
      </MenuList>

      <MenuList
        key='About'>
          <TabletLinks onClick={renderAbout}>About</TabletLinks>
      </MenuList>

      <MenuList
         key='Contact'>
          <TabletLinks onClick={renderContact}>Contact</TabletLinks>
      </MenuList>
    </ol>
  )
}

export default MenuTablet

MenuTablet.propTypes = {
  renderAbout: PropTypes.func.isRequired,
  renderContact: PropTypes.func.isRequired,
  toggleHidden: PropTypes.func.isRequired
}
