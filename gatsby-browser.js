import React from 'react'
import Layout from './src/components/Layout'
require('typeface-muli')
require('typeface-heebo')
require('typeface-raleway')
require('typeface-libre-baskerville')

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
