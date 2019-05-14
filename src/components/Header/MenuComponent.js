import React from 'react'
import About from '../About/About'
import ContactContainer from '../Contact/ContactContainer'
import MenuWrapper from '../Menu/MenuWrapper'
import PropTypes from 'prop-types'

const MenuComponent = ({ toggleForm, compProps, toggleHidden}) => {
  return (
    <>
      <About />
      <ContactContainer
        form={compProps.form}
        toggleForm={toggleForm}
      />
      <MenuWrapper
          links={compProps.links}
          toggleHidden={toggleHidden} />
    </>
  )
}

export default MenuComponent

MenuComponent.propTypes = {
  compProps: PropTypes.shape({
    form: PropTypes.bool.isRequired,
    links: PropTypes.array.isRequired,
  }).isRequired,
  toggleForm: PropTypes.func.isRequired,
  toggleHidden: PropTypes.func.isRequired
}
