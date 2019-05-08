import React from 'react'
import PropTypes from 'prop-types'
import FODE from './FODE/FODE'
import Forager from './Forager/Forager'
import LK from './LK/LK'
import LML from './LML/LML'
import PPD from './PPD/PPD'
import SCC from './SCC/SCC'


const MainContent = ({ mainContent }) => {
  return (
    <>
    {
     mainContent.fode ?
       <FODE fode={mainContent.fode}/>
       :
       null
    }
    {
      mainContent.forager ?
      <Forager forager={mainContent.forager} />
      :
      null
    }
    {
      mainContent.lk ?
      <LK lk={mainContent.lk} />
      :
      null
    }
    {
      mainContent.lml ?
      <LML lml={mainContent.lml} />
      :
      null
    }
    {
      mainContent.ppd ?
      <PPD ppd={mainContent.ppd} />
      :
      null
    }
    {
      mainContent.scc ?
      <SCC scc={mainContent.scc} />
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
