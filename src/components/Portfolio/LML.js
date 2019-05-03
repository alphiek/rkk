import React from 'react'
import styled from 'styled-components'
import lml from '../../images/Portfolio/LML.svg'
import { Thumbnail } from '../Global/Shared'

const LMLThumb = styled(Thumbnail)`
  background : -moz-linear-gradient(71.92% 129.54% 110deg,rgba(171, 174, 241, 1) 0%,rgba(134, 179, 212, 1) 43%,rgba(121, 203, 189, 1) 100%);
  background : -webkit-linear-gradient(110deg, rgba(171, 174, 241, 1) 0%, rgba(134, 179, 212, 1) 43%, rgba(121, 203, 189, 1) 100%);
  background : -webkit-gradient(linear,71.92% 129.54% ,28.08% 9.1% ,color-stop(0,rgba(171, 174, 241, 1) ),color-stop(0.43,rgba(134, 179, 212, 1) ),color-stop(1,rgba(121, 203, 189, 1) ));
  background : -o-linear-gradient(110deg, rgba(171, 174, 241, 1) 0%, rgba(134, 179, 212, 1) 43%, rgba(121, 203, 189, 1) 100%);
  background : -ms-linear-gradient(110deg, rgba(171, 174, 241, 1) 0%, rgba(134, 179, 212, 1) 43%, rgba(121, 203, 189, 1) 100%);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ABAEF1', endColorstr='#79CBBD' ,GradientType=0)";
  background : linear-gradient(-20deg, rgba(171, 174, 241, 1) 0%, rgba(134, 179, 212, 1) 43%, rgba(121, 203, 189, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ABAEF1',endColorstr='#79CBBD' , GradientType=1);
`

const LML = () => {
  return (
    <LMLThumb>
    <img src={lml} alt='Like-Minded-Living Logo' />
    </LMLThumb>
  )
}

export default LML
