import React from "react"
import Form from "./Form"
import BackButton from "./BackButton"
import ContactDetails from "./ContactDetails"
import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import Breakpoint from "react-socks"
import RenderMenu from "../Footer/RenderMenu"
import { PageWrapper, ContactTitle, ContactWrapper } from "../Global/MenuShared"
import styled from "styled-components"

const ContactMenuButton = styled.div`
  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    width: 100%;
  }
  @media only screen and (max-width: 570px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const ContactFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const ContactContainer = ({ form, toggleForm, renderMenu }) => {
  return (
    <PageWrapper>
      <ContactWrapper>
        <ContactFlexContainer>
          <Fade>
            <ContactTitle>Drop us a line</ContactTitle>
          </Fade>
          {form ? <Form /> : <ContactDetails />}
          <Breakpoint tablet down>
            <ContactMenuButton>
              <RenderMenu renderMenu={renderMenu} />
              <BackButton form={form} toggleForm={toggleForm} />
            </ContactMenuButton>
          </Breakpoint>
          <Breakpoint desktop up>
            <BackButton form={form} toggleForm={toggleForm} />
          </Breakpoint>
        </ContactFlexContainer>
      </ContactWrapper>
    </PageWrapper>
  )
}

export default ContactContainer

ContactContainer.propTypes = {
  form: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  renderMenu: PropTypes.func,
}
