import React from 'react'
import About from '../About/About'
import ContactContainer from '../Contact/ContactContainer'
import MenuComponent from './MenuComponent'
import PropTypes from 'prop-types'

const MenuContainer = ({ toggleForm, compProps, toggleHidden}) => {
  return (
    <>
      <About />
      <ContactContainer
        form={compProps.form}
        toggleForm={toggleForm}
      />
      <MenuComponent
          links={compProps.links}
          toggleHidden={toggleHidden} />
    </>
  )
}

export default MenuContainer

MenuContainer.propTypes = {
  compProps: PropTypes.shape({
    form: PropTypes.bool.isRequired,
    links: PropTypes.array.isRequired,
  }).isRequired,
  toggleForm: PropTypes.func.isRequired,
  toggleHidden: PropTypes.func.isRequired
}
