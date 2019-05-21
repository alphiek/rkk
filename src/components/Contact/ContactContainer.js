import React from 'react'
import Form from './Form'
import BackButton from './BackButton'
import ContactDetails from './ContactDetails'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import Breakpoint from 'react-socks'
import RenderMenu from '../Footer/RenderMenu'
import {
  PageWrapper,
  ContactTitle,
  ContactWrapper,
 } from '../Global/MenuShared'
 import styled from 'styled-components'

const ContactMenuButton = styled.div`
  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    width: 100%;
  }
  @media only screen and (max-width: 824px) {
    flex-direction: column;
  }
`

const ContactContainer = ({ form, toggleForm, renderMenu }) => {
  return (
    <PageWrapper>
     <ContactWrapper>
     <Fade>
        <ContactTitle>Drop us a line</ContactTitle>
     </Fade>
        {form ?
            <Form />
          :
          <ContactDetails />
        }
        <Breakpoint mobile up>
        <ContactMenuButton>
        <BackButton form={form} toggleForm={toggleForm}/>
        <RenderMenu renderMenu={renderMenu}/>
        </ContactMenuButton>
        </Breakpoint>
     </ContactWrapper>
    </PageWrapper>
  )
}

export default ContactContainer

ContactContainer.propTypes = {
  form: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  renderMenu: PropTypes.func
}
