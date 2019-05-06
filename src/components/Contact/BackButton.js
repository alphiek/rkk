import React from 'react'
import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

export const Back = styled.div`
  margin-top: 2em;
  width: 100%;
  text-align: right;
`

export const BackText = styled.p`
  line-height: 100%;
  font-family: ${font.heebo};
  font-weight: ${weight.bold};
  letter-spacing: ${spacing.wide};
  color: ${color.primary};
  text-transform: uppercase;
  font-size: 0.5em;
`

const BackButton = ({toggleForm, form}) => {
  return (
    <Back onClick={toggleForm}>
    <Fade bottom delay={600}>
    {
      form ?
      <BackText>Back to Contact Details</BackText>
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
