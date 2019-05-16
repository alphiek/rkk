import posed from 'react-pose'
import styled from 'styled-components'


const PosedLeft = posed.div({
  visible: {
    opacity: 1,
    x: '-50%',
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
      default: { ease: 'linear', duration: 500 }
    }
  }
});

export const AniLeft = styled(PosedLeft)`
  width: 8em;
  position: relative;
  left: -3em;
  top: -8em ;
`
