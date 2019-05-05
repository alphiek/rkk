import React from 'react'
import styled from 'styled-components'
import fode from '../../images/Portfolio/FODE.svg'
import lml from '../../images/Portfolio/LML.svg'
import ppd from '../../images/Portfolio/PPD.svg'
import { Thumbnail } from '../Global/Shared'


const FodeThumb = styled(Thumbnail)`
  background: white;
`
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

const PPDThumb = styled(Thumbnail)`
  background : -moz-radial-gradient(108.08% 44.47%, circle farthest-corner, rgba(235, 51, 73, 1) 0.51%, rgba(244, 92, 67, 1) 100%);
  background : -webkit-radial-gradient(108.08% 44.47%, circle farthest-corner, rgba(235, 51, 73, 1) 0.51%, rgba(244, 92, 67, 1) 100%);
  background : -webkit-gradient(radial,108.08% 44.47% ,3.82 , 108.08% 44.47%, 744.92 ,color-stop(0.0051,rgba(235, 51, 73, 1) ),color-stop(1,rgba(244, 92, 67, 1) ));
  background : -o-radial-gradient(108.08% 44.47%, circle farthest-corner, rgba(235, 51, 73, 1) 0.51%, rgba(244, 92, 67, 1) 100%);
  background : -ms-radial-gradient(108.08% 44.47%, circle farthest-corner, rgba(235, 51, 73, 1) 0.51%, rgba(244, 92, 67, 1) 100%);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Stlye=2);"
  background : radial-gradient(108.08% 44.47%, circle farthest-corner, rgba(235, 51, 73, 1) 0.51%, rgba(244, 92, 67, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2);
`

const Logo = styled.img`
  width: 5em;
`

export const FODE = () => {
  return (
    <FodeThumb>
    <Logo src={fode} alt='Fly or Die Logo' />
    </FodeThumb>
  )
}


export const LML = () => {
  return (
    <LMLThumb>
    <img src={lml} alt='Like-Minded-Living Logo' />
    </LMLThumb>
  )
}

export const PPD = () => {
  return (
    <PPDThumb>
    <img src={ppd} alt='Paphos Painter Decorators Logo' />
    </PPDThumb>
  )
}
