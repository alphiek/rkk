import React from 'react'
import PropTypes from 'prop-types'
import FODE from './FODE/FODE'
import Forager from './Forager/Forager'
import LK from './LK/LK'
import LML from './LML/LML'
import PPD from './PPD/PPD'
import SCC from './SCC/SCC'


const MainContent = ({ mainContent, onClickToggle }) => {
  return (
    <>
    {
     mainContent.fode ?
       <FODE
        fode={mainContent.fode}
        onClickToggle={onClickToggle}/>
       :
       null
    }
    {
      mainContent.forager ?
      <Forager
       forager={mainContent.forager}
       onClickToggle={onClickToggle} />
      :
      null
    }
    {
      mainContent.lk ?
      <LK
        lk={mainContent.lk}
        onClickToggle={onClickToggle} />
      :
      null
    }
    {
      mainContent.lml ?
      <LML
        lml={mainContent.lml}
        onClickToggle={onClickToggle} />
      :
      null
    }
    {
      mainContent.ppd ?
      <PPD
        ppd={mainContent.ppd}
        onClickToggle={onClickToggle} />
      :
      null
    }
    {
      mainContent.scc ?
      <SCC
        scc={mainContent.scc}
        onClickToggle={onClickToggle} />
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
