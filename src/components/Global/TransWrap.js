import React from 'react'
import posed from 'react-pose'
import { TransitionState } from "gatsby-plugin-transition-link";
import PropTypes from 'prop-types'

const Trans = posed.div({
  hidden: { opacity: 0},
  visable: { opacity: 1},
})

export const TransWrap = ({ children }) => {
  return (
    <TransitionState>
    {({ transitionStatus }) => (
      <Trans
        pose={
          ['entering', 'entered'].includes(transitionStatus)
          ? 'visable'
          : 'hidden'
        }>
        {children}
      </Trans>
    )}
  </TransitionState>
  )
}

TransWrap.propTypes = {
  children: PropTypes.node.isRequired
}
