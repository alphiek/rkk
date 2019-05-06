import React from 'react'
import AboutTab from '../About/AboutTab'
import ContactContainer from '../Contact/ContactContainer'
import MenuWrapperTablet from '../Menu/MenuWrapperTablet'
import { PageWrapper } from '../Global/Menu_FooterPageWrapper'

const Footer = (props) => {
  return (
    <PageWrapper>
      {
        props.compProps.menu ?
          <MenuWrapperTablet
          links={props.compProps.links}
          toggleHidden={props.toggleHidden}
          renderAbout={props.renderAbout}
          renderContact={props.renderContact}
          />
          : null
      }
      {
        props.compProps.contact ?
          <ContactContainer
          toggleForm={props.toggleForm}
          form={props.compProps.form}
          tablet={props.compProps.tablet}
          renderMenu={props.renderMenu}
          />
          : null
      }
      {
        props.compProps.about ?
          <AboutTab
          renderMenu={props.renderMenu}
          />
          : null
      }
    </PageWrapper>
  )
}

export default Footer
