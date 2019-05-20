import gif from '../../images/GIF/rkkMock.gif'
import styled from 'styled-components'
import { RightWrapper } from '../Global/ServiceFlexWrapper'
import Fade from 'react-reveal/Fade'

const GIF = styled.img`
  width: 20em;
@@ -15,9 +14,7 @@ const GIF = styled.img`
const Video = () => {
  return (
    <RightWrapper>
    <Fade right>
     <GIF src={gif} alt='Laptop with moving code and site preview' />
     </Fade>
    </RightWrapper>
  )
}

export default Video
