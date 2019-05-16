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
  margin-bottom: 2em;
  width: 100%;
  height: 3em;
  background-color: ${color.secondary};
`

const BackButton = ({toggleForm, form}) => {
  return (
    <Back onClick={toggleForm}>
    <Fade bottom delay={600}>
    {
      form ?
      <BackText>Show Contact Details</BackText>
      :
      <BackText>Contact Form</BackText>
    }
    </Fade>
    </Back>
  )
}

export default BackButton

BackButton.propTypes = {
  form: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired
}
