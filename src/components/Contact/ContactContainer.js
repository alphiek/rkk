import React from 'react'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'
import Form from './Form'
import BackButton from './BackButton'
import ContactDetails from './ContactDetails'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import RenderMenu from '../Footer/RenderMenu'

const PageWrapper = styled.div`
  width: 33%;
  border-right: 0.3em solid ${color.secondary};
  @media only screen and (max-width: 1024px){
    width: 100%;
  }
`
const ContactWrapper = styled.div`
  background-color: ${color.white};
  height: 22em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  padding: 1.8em;
  overflow: hidden;
`
const ContactTitle = styled.h2`
  font-size: 1.6em;
  color: ${color.primary};
  font-family: ${font.muli};
  font-weight: ${weight.black};
  letter-spacing: ${spacing.narrow};
`

const ContactContainer = ({ form, tablet, toggleForm, renderMenu }) => {
  return (
    <PageWrapper>
     <ContactWrapper>
     <Fade bottom>
        <ContactTitle>Contact</ContactTitle>
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
  tablet: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  renderMenu: PropTypes.func
}
