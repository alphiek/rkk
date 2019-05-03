import React from 'react'
import styled from 'styled-components'
import fode from '../../images/Portfolio/FODE.svg'
import { Thumbnail } from '../Global/Shared'

const FodeThumb = styled(Thumbnail)`
  background: white;
`
const Logo = styled.img`
  width: 5em;
`

const FODE = () => {
  return (
    <FodeThumb>
    <Logo src={fode} alt='Fly or Die Logo' />
    </FodeThumb>
  )
}

export default FODE
