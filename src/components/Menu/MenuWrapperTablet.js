import React from 'react'
import SocialButtons from '../Global/SocialButtons'
import MenuWrapper from './MenuWrapper'
import PropTypes from 'prop-types'
import { TabletLinks, MenuList } from './menuStyles'

const MenuWrapperTablet = (props) => {
  return (
    <MenuWrapper links={props.links} toggleHidden={props.toggleHidden}>
      <MenuList>
        <TabletLinks onClick={props.renderAbout}>About</TabletLinks>
      </MenuList>
      <MenuList>
        <TabletLinks onClick={props.renderContact}>Contact</TabletLinks>
      </MenuList>
      <SocialButtons />
    </MenuWrapper>
  )
}

export default MenuWrapperTablet

MenuWrapperTablet.propTypes = {
  links: PropTypes.array.isRequired,
  renderAbout: PropTypes.func.isRequired,
  renderContact: PropTypes.func.isRequired,
  toggleHidden: PropTypes.func.isRequired
}
