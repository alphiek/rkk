import React from 'react'
import AboutTab from '../About/AboutTab'
import ContactContainer from '../Contact/ContactContainer'
import MenuTablet from './MenuTablet'
import PropTypes from 'prop-types'

const FooterComponent = ({ compProps, toggleHidden, renderMenu, renderAbout, renderContact, toggleForm}) => {
  return (
    <>
      {
        compProps.menu ?
          <MenuTablet
          toggleHidden={toggleHidden}
          renderAbout={renderAbout}
          renderContact={renderContact}
          />
          : null
      }
      {
        compProps.contact ?
          <ContactContainer
          toggleForm={toggleForm}
          form={compProps.form}
          tablet={compProps.tablet}
          toggleHidden={toggleHidden}
          renderMenu={renderMenu}
          />
          : null
      }
      {
        compProps.about ?
          <AboutTab
          renderMenu={renderMenu}
          />
          : null
      }
    </>
  )
}

export default FooterComponent

FooterComponent.propTypes = {
  compProps: PropTypes.shape({
    tablet: PropTypes.bool.isRequired,
    form: PropTypes.bool.isRequired,
    contact: PropTypes.bool.isRequired,
    about: PropTypes.bool.isRequired,
    menu: PropTypes.bool.isRequired
  }).isRequired,
  renderAbout: PropTypes.func.isRequired,
  renderContact: PropTypes.func.isRequired,
  toggleHidden: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  renderMenu: PropTypes.func.isRequired
}
