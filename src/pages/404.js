import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import Helmet from "react-helmet"


const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
@media only screen and (max-height: 424px) and (orientation:Landscape) {
  min-height: 180vh;
}

`

const Title = styled.h1`
  margin-top: 0.2em;
  font-size: 10em;
  line-height: 140%;
  background: linear-gradient(130deg, hsl(181, 97%, 44%), #6600FF);
  color:transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
`
const SubTitle = styled.h2`
  text-align: center;
  line-height: 130%;
  width: 80%;
  text-transform: uppercase;
  font-size: 2em;
  color: #2c2c2c;
`
const Text = styled.p`
  font-size: 0.55em;
  margin-top: 2em;
  color: #2c2c2c;
  text-align: center;
  width: 80%;
  @media only screen and (max-width: 824px) {
    font-size: 0.7em;
  }
`

const Home = styled(Link)`
  margin-top: 2em;
  color: #6600ff;
  font-weight: 400;
  font-size: 0.7em;
  text-decoration: none;
  border-radius: 0.2em;
  transition: 200ms;
  padding: 0.8em 1.7em;
  background: #fff;
  decoration: none;
  border: 0.2em solid #6600ff;
  &: hover {
    background: #6600ff;
    color: #fff;
  }
  @media only screen and (max-width: 824px) {
    font-size: 0.9em;
  padding: 1em 2em;
  }
`

const NotFoundPage = () => (
  <>
  <Helmet>
    <html lang="en"/>
    <title>Error Not Found</title>
    <meta name="description" content="404 Page"></meta>
  </Helmet>
  <PageWrapper>
    <Title>404</Title>
    <SubTitle>OOPs! Nothing was Found</SubTitle>
    <Text>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</Text>
    <Home to='/' >RETURN TO SITE</Home>
  </PageWrapper>
  </>
)

export default NotFoundPage
