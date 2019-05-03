import React from 'react'
import styled from 'styled-components'
import LML from './LML'
import PPD from './PPD'
import FODE from './FODE'


const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5em;
  grid-row-gap: 1.5em;
`

const GridContainer = () => {
  return(
    <Container>
        <LML />
        <PPD />
        <FODE />
    </ Container>
  )
}

export default GridContainer
