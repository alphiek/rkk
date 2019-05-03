import React from 'React'
import styled from 'styled-components'
import ppd from '../../images/Portfolio/PPD.svg'
import { Thumbnail } from '../Global/Shared'

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

const PPD = () => {
  return (
    <PPDThumb>
    <img src={ppd} alt='Paphos Painter Decorators Logo' />
    </PPDThumb>
  )
}

export default PPD
