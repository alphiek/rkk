import React from 'react'
import SocialButtons from '../Global/SocialButtons'
import MenuWrapper from './MenuWrapper'
import PropTypes from 'prop-types'
import { TabletLinks, MenuList } from './menuStyles'
import Fade from 'react-reveal/Fade'

const MenuWrapperTablet = ({ tablet, links, toggleHidden, renderAbout, renderContact}) => {
  return (
    <MenuWrapper
       links={links}
       toggleHidden={toggleHidden}
       tablet={tablet}>
      <Fade right cascade delay={100}>
      <MenuList>
        <TabletLinks onClick={renderAbout}>About</TabletLinks>
      </MenuList>
      <MenuList>
        <TabletLinks onClick={renderContact}>Contact</TabletLinks>
      </MenuList>
      </Fade>
      <SocialButtons />
    </MenuWrapper>
  )
}

export default MenuWrapperTablet

MenuWrapperTablet.propTypes = {
  links: PropTypes.array.isRequired,
  renderAbout: PropTypes.func.isRequired,
  renderContact: PropTypes.func.isRequired,
  toggleHidden: PropTypes.func.isRequired,
  tablet: PropTypes.bool.isRequired
}
