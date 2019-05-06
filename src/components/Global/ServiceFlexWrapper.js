import React from 'react'
import NumberNav from '../Global/Numbers'
import BottomNav from '../Global/BottomNav'
import { TransWrap } from '../Global/TransWrap'
import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
@media only screen
    and (max-width: 824px)
    and (orientation: landscape) {
    }
`
export const PageWrapperCenter = styled(PageWrapper)`
  align-items: center;
@media only screen
    and (max-width: 1024px) {
    }
`
const FlexContainer = styled(PageWrapper)`
  justify-content: center;
  align-items: center;
@media only screen
    and (max-width: 1024px) {
      flex-direction: column-reverse;
      justify-content: flex-end;
    }
@media only screen
    and (max-width: 824px)
    and (orientation: landscape) {
      flex-direction: row;
    }
`

export const LeftWrapper = styled.div`
  width: 40%;
  margin-left: 7%;
  padding-right: 3em;
@media only screen
    and (max-width: 1024px) {
      height: 50%;
      width: 70%;
    }
@media only screen
    and (max-width: 824px)
    and (max-height: 824px)
    and (orientation: portrait) {
      width: 90%;
      margin-left: 20%;
    }
@media only screen
    and (max-width: 823px)
    and (orientation: landscape) {
      width: 55%;
      margin-left: 11%;
      margin-right: 0;
      padding-right: 2em;
    }
@media only screen
    and (max-width: 768px)
    and (orientation: landscape) {
      width: 72%;
      margin-left: 11%;
      margin-right: 0;
      padding-right: 2em;
    }
`
export const RightWrapper = styled.div`
  width: 60%;
@media only screen
    and (max-width: 1024px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50%;
      width: 100%;
    }
@media only screen
    and (max-width: 1024px)
    and (min-width: 825px)
    and (orientation: landscape) {
      right:0;
      width: 70%;
    }
@media only screen
    and (max-width: 823px)
    and (min-height: 1024px) {
      width:80%;
}
@media only screen
    and (max-width: 824px)
    and (orientation: landscape) {
      right:0;
      width: 50%;
    }
@media only screen
    and (min-height: 810px)
    and (max-height: 824px)
    and (orientation: portrait) {
      height: 40%;
    }

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
