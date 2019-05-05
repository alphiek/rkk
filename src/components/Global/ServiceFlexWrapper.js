import React from 'react'
import NumberNav from '../Global/Numbers'
import BottomNav from '../Global/BottomNav'
import { TransWrap } from '../Global/TransWrap'
import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
export const PageWrapperCenter = styled(PageWrapper)`
  align-items: center;
`
const FlexContainer = styled(PageWrapper)`
  justify-content: center;
  align-items: center;
`

export const LeftWrapper = styled.div`
  width: 40%;
  margin-left: 7%;
  padding-right: 3em;
`
export const RightWrapper = styled.div`
  width: 60%;
`

export const ServiceFlexWrapper = ({children}) => {
  return (
    <TransWrap>
    <PageWrapperCenter>
      <NumberNav />
       <FlexContainer>
          {children}
        </FlexContainer>
      <BottomNav />
    </PageWrapperCenter>
    </TransWrap>
  )
}
