import React from 'react'
import styled from 'styled-components'
import { FODE, LML, PPD } from './Thumbnails'


const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 1fr);
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
