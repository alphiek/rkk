import React from 'react'
import About from '../About/About'
import ContactContainer from '../Contact/ContactContainer'
import MenuWrapper from './MenuWrapper'
import PageWrapper from './PageWrapper'

const TabletMenu = (props) => {
  return (
    <PageWrapper>
      {
        props.compProps.menu ?
          <MenuWrapper
          compProps={props.compProps}
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
          compProps={props.compProps}
          toggleHidden={props.toggleHidden}
          renderMenu={props.renderMenu}
          />
          : null
      }
      {
        props.compProps.about ?
          <About
          compProps={props.compProps}
          toggleHidden={props.toggleHidden}
          renderMenu={props.renderMenu}
          />
          : null
      }
    </PageWrapper>
  )
}

export default TabletMenu
