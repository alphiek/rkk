import React from 'react'
import MobileTitle from './MobileTitle'
import { PageContainer } from './Containers'
import Plant from './Plant'

const MobileLanding = ({ mobile }) => {
  return (
    <PageContainer>
      <MobileTitle />
      <Plant />
    </PageContainer>
  )
}

export default MobileLanding
