import React from 'react'
import styled from 'styled-components'
import { FODE, LML, PPD } from './Thumbnails'


const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
`

const GridContainer = (props) => {
  return(
    <Container>
        <LML toggleMain={props.toggleMain} visbible={props.state.lml}/>
        <PPD toggleMain={props.toggleMain} visbible={props.state.ppd}/>
        <FODE toggleMain={props.toggleMain} visbible={props.state.fode}/>
    </ Container>
  )
}

export default GridContainer
