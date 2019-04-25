import React from 'react'
import About from '../About/About'
import ContactContainer from '../Contact/ContactContainer'
import MenuWrapper from './MenuWrapper'
import PageWrapper from './PageWrapper'

const MenuComponent = (props) => {
  return (
    <PageWrapper>
      <About compProps={props.compProps} />
      <ContactContainer compProps={props.compProps} />
      <MenuWrapper compProps={props.compProps} toggleHidden={props.toggleHidden} />
    </PageWrapper>
  )
}

export default MenuComponent
