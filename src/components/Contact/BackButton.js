import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/variables'
import { BackText } from '../Global/MenuShared'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
  margin-bottom: 1em;
  width: 100%;
  height: 3em;
  background-color: ${color.secondary};
  overflow: hidden;
  &: hover {
    box-shadow: 21px 21px 24px -10px rgba(0,0,0,.15);
  }
  @media only screen and (max-width: 1024px) {
    padding: 1em;
    width: 30vw;
    margin-top: 1em;
    float: left;
    background-color: #fff;
    border: 0.1em solid ${color.secondary};
    margin-right: 11%;
  }
  @media only screen and (max-width: 824px) {
    width: 80vw;
    margin-right: 0;
    margin-bottom: 2em;
  }
  @media only screen and (max-width: 570px){
    padding: 1em;
    margin-top: 0.5em;
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
