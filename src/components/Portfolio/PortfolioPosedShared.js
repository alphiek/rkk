import posed from 'react-pose'

export const PosedWrapper = posed.div(
  {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  }
)
