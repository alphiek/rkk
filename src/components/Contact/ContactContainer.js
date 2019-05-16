import React from 'react'
import Form from './Form'
import BackButton from './BackButton'
import ContactDetails from './ContactDetails'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import RenderMenu from '../Footer/RenderMenu'
import {
  PageWrapper,
  ContactTitle,
  ContactWrapper
 } from '../Global/MenuShared'


const ContactContainer = ({ form, tablet, toggleForm, renderMenu }) => {
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
        <BackButton form={form} toggleForm={toggleForm}/>
     </ContactWrapper>
     {tablet ?
     <RenderMenu renderMenu={renderMenu}/>
     :
     null
   }
    </PageWrapper>
  )
}

export default ContactContainer

ContactContainer.propTypes = {
  form: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  renderMenu: PropTypes.func
}
