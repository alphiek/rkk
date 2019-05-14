import React from 'react'
import RenderMenu from '../Footer/RenderMenu'
import SocialButtons from '../Global/SocialButtons'
import About from './About'
import PropTypes from 'prop-types'

const AboutTab = ({renderMenu}) => {
  return (
    <About>
      <RenderMenu renderMenu={renderMenu}/>
      <SocialButtons />
    </About>
  )
}

export default AboutTab

AboutTab.propsTypes = {
  renderMenu: PropTypes.func.isRequired
}
