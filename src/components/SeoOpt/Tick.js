import React from 'react'
import styled from 'styled-components'
import { color } from '../Global/variables'


const TickSvg = styled.svg`
  width: 0.7em;
  height: 0.7em;
  margin-right: 0.5em;
  fill: ${color.secondary};
`
const Tick = () => {
  return (
    <TickSvg
      alt='Tick'
      viewBox="0 0 176 164">
      <svg>
      <path d="M1.6,100.3c-0.6-0.8-0.6-1.9,0-2.7c1-1.3,2.3-1,4.1,0.1c13.1,7.6,26.3,14.9,39.5,22.3c0.9,0.5,1.9,1,2.9,1.6
      	C82.6,74.7,121,32.1,171.4,1.5c0.8-0.5,1.9-0.3,2.5,0.5l0.1,0.1c0.7,0.9,0.6,2.3-0.3,3.1l0,0C126.1,48.2,89.5,99.6,61.2,157.1
      	c-0.8,1.7-1.7,3.3-2.5,5s-2,1.7-3.3,0.6c-0.2-0.2-0.4-0.4-0.6-0.7C37.1,141.4,19.3,120.8,1.6,100.3L1.6,100.3z" />
      </svg>
    </TickSvg>
  )
}

export default Tick
