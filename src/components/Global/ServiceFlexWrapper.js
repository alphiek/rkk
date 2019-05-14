import React from 'react'
import NumberNav from '../Global/NumberNav'
import BottomNav from '../Global/BottomNav'
import { TransWrap } from '../Global/TransWrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  @media only screen and (max-width: 1024px) {
    padding-bottom: 5em;
  }
`
export const PageWrapperCenter = styled(PageWrapper)`
  align-items: center;
  @media only screen and (max-width: 1024px) {
    padding-bottom: 7em;
  }
`
export const FlexContainer = styled(PageWrapper)`
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`
export const LeftWrapper = styled.div`
  width: 40%;
  margin-left: 7%;
  padding: 0em 3em;

  @media only screen and (max-width: 1024px) {
    margin-left: 0;
    height: 50%;
    width: 70%;
  }

  @media only screen and (max-width: 824px) {
    padding: 1.5em
  }

  @media only screen and (max-width: 570px) {
    width: 85%;
    margin-top: 10%;
  }
`
export const RightWrapper = styled.div`
  position: relative;
  width: 55%;

  @media only screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vw;
    height: 50%;
    width: 90%;
  }

  @media only screen and (max-width: 824px) {
    width: 100%;
  }

  @media only screen and (max-width: 570px) {
    margin-top: 8%;
  }
`

export const ServiceFlexWrapper = ({tablet, children}) => {
  const hide = tablet
  return (
    <TransWrap>
      <PageWrapperCenter>
        {
          !hide ?
          <NumberNav />
          : null
        }
         <FlexContainer>
           {children}
         </FlexContainer>
        {
          !hide ?
          <BottomNav />
          : null
        }
      </PageWrapperCenter>
    </TransWrap>
  )
}

ServiceFlexWrapper.propTypes = {
  tablet: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
