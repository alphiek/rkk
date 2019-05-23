import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/variables'
import { BackText } from '../Global/MenuShared'
import PropTypes from 'prop-types'

export const Back = styled.div`
  border: 0.10em solid ${color.secondary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
  margin-bottom: 1em;
  width: 100%;
  height: 3em;
  background-color: ${color.offWhite};
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    border: 0.15em solid ${color.secondary};
    padding: 1.5em 1em;
    width: 30vw;
    margin-top: 1em;
    float: left;
    margin-left: 2%;
  }
  @media only screen and (max-width: 824px) {
    width: 35vw;
    margin-bottom: 0.5em;
  }
  @media only screen and (max-width: 570px){
    width: 100%;
    margin-left: 0;
    padding: 2em 1em;
  }
`

const BackButton = ({toggleForm, form}) => {
  return (
    <Back onClick={toggleForm}>
    {
      form ?
      <BackText>Contact Details</BackText>
      :
      <BackText>Contact Form</BackText>
    }
    </Back>
  )
}

export default BackButton

BackButton.propTypes = {
  form: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired
}
