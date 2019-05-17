import React from 'react'
import { BlueContainerAnim, RedContainerAnim } from './Containers'
import LampAnim from './LampAnim'
import MouseAnim from './MouseAnim'
import Plant from './Plant'

const DesktopAnim = () => {
  return (
  <>
    <LampAnim />
    <BlueContainerAnim>
      <MouseAnim />
    </BlueContainerAnim>
    <RedContainerAnim>
      <Plant />
    </RedContainerAnim>
  </>
  )
}

export default DesktopAnim
