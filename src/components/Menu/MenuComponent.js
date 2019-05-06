import React from 'react'
import About from '../About/About'
import { PageWrapper } from '../Global/Menu_FooterPageWrapper'
import ContactContainer from '../Contact/ContactContainer'
import MenuWrapper from './MenuWrapper'
import PropTypes from 'prop-types'

const MenuComponent = (props) => {
  return (
    <PageWrapper>
      <About />
      <ContactContainer
      form={props.compProps.form}
      toggleForm={props.toggleForm}
      tablet={props.compProps.tablet}
      />
      <MenuWrapper links={props.compProps.links} toggleHidden={props.toggleHidden} />
    </PageWrapper>
  )
}

export default MenuComponent

MenuComponent.propTypes = {
  compProps: PropTypes.shape({
    contact: PropTypes.bool.isRequired,
    form: PropTypes.bool.isRequired,
    isHidden: PropTypes.bool.isRequired,
    links: PropTypes.array.isRequired,
  }).isRequired,
  toggleForm: PropTypes.func.isRequired,
  toggleHidden: PropTypes.func.isRequired
}
