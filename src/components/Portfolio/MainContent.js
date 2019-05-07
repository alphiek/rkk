import React from 'react'
import PropTypes from 'prop-types'
import FODE from './FODE/FODE'

const MainContent = ({ mainContent }) => {
  return (
    <>
    {
     mainContent.fode ?
       <FODE />
       :
       null
    }
    </>
  )
}

export default MainContent

MainContent.propTypes = {
    mainContent: PropTypes.object.isRequired
}
