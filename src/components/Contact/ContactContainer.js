import React from 'react'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'
import RenderMenu from '../Header/RenderMenu'
import SocialButtons from '../Header/SocialButtons'

const PageWrapper = styled.div`
  width: 33%;
  border-right: 0.3em solid ${color.secondary};
`
const ContactWrapper = styled.div`
  background-color: ${color.white};
  height: 22em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  padding: 1.8em;
`
const ContactTitle = styled.h2`
  font-size: 1.8em;
  color: ${color.primary};
  font-family: ${font.muli};
  font-weight: ${weight.extraBold};
  letter-spacing: ${spacing.narrow};
`

const ContactContainer = (props) => {
  return (
    <PageWrapper>
     <ContactWrapper>
        <ContactTitle>Contact</ContactTitle>
     </ContactWrapper>
     {
      props.compProps.tablet || props.compProps.mobile ?
      <React.Fragment>
        <RenderMenu renderMenu={props.renderMenu}/>
        <SocialButtons />
      </React.Fragment>
      : null
     }
    </PageWrapper>
  )
}

export default ContactContainer
