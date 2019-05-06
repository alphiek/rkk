import React from 'react'
import NumberNav from '../Global/NumberNav'
import BottomNav from '../Global/BottomNav'
import { TransWrap } from '../Global/TransWrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
