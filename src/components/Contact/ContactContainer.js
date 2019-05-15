import React from 'react'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'
import Form from './Form'
import BackButton from './BackButton'
import ContactDetails from './ContactDetails'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import RenderMenu from '../Footer/RenderMenu'
import { H2Menu } from '../Global/textSizes'

const PageWrapper = styled.div`
  width: 30%;
  @media only screen and (max-width: 1024px){
    width: 100%;
  }
`
const ContactWrapper = styled.div`
  background-color: #f9f9f9;
  height: 25em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  padding: 1.8em;
  overflow: hidden;
  box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
`
const ContactTitle = styled(H2Menu)`
  margin-top: 0.2em;
  margin-bottom: 0.6em;
  color: ${color.primary};
`

const ContactContainer = ({ form, tablet, toggleForm, renderMenu }) => {
  return (
    <PageWrapper>
     <ContactWrapper>
     <Fade bottom>
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
