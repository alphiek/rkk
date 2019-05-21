import styled from 'styled-components'
import { color, font, weight, spacing } from '../Global/variables'
import { H2Menu, BodyText } from '../Global/textSizes'

export const PageWrapper = styled.div`
  width: 30%;
  @media only screen and (max-width: 1024px){
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

 `
export const MenuWrapper = styled.nav`
  width: 30%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }  @media only screen and (max-height: 767px) and (min-width:767px) {
      align-items: flex-start;
    }

  @media only screen and (max-height: 424px) {
    top: 0;
    bottom:0;
    position:fixed;
    overflow-y:scroll;
    overflow-x:hidden;
    align-items: flex-start;
  }
 `
export const AboutTitle = styled(H2Menu)`
   color: ${color.secondary};
   @media only screen and (max-width: 1024px){
     margin-bottom: 1em;
     color: ${color.primary};
   }
 `

export const ContactTitle = styled(H2Menu)`
   margin-top: 0.2em;
   margin-bottom: 0.6em;
   color: ${color.primary};
   @media only screen and (max-width: 570px){
     margin-bottom: 0.5em;
   }
 `

 export const MenuLinksTitle = styled(H2Menu)`
   color: ${color.offWhite};
   border-bottom: 0.1em solid ${color.offWhite};
   margin-bottom: 0.5em;
   padding-top: 0.1em;
   padding-bottom: 0.8em;
   @media only screen and (max-width: 1024px) {
     display: none;
   }
 `

 export const AboutWrapper = styled.div`
   border: 0.3em solid ${color.offWhite};
   height: 25em;
   margin-right: 0.5em;
   padding: 1.8em;
   overflow: hidden;
   box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);

   @media only screen and (max-width: 1024px) {
     border: none;
     margin: 0;
     min-height: 100vh;
     width: 100%;
     padding: 13% 10%;
     background-color: ${color.offWhite};
  }

  @media only screen and (max-height: 600px) {
    overflow: scroll;
    }
 `
 export const ContactWrapper = styled(AboutWrapper)`
   margin-left: 0.5em;
   border: 0;
   position: relative;
   background: ${color.offWhite};
 @media only screen and (max-width: 1024px) {
   min-height: 100vh;
   width: 100%;
   padding: 13% 10%;
 }
 `

 export const AboutText = styled(BodyText)`
   margin-top: 2em;
   color: ${color.white};
   @media only screen and (max-width: 1024px) {
     color: ${color.darkLink};
 `

 export const Copyright = styled.p`
   font-weight: ${weight.normal};
   position: absolute;
   bottom: 3em;
   left: 7em;
   font-size: 0.5em;
   color: ${color.secondary};
   font-family: ${font.muli};
   font-size: calc(0.38em + 0.1vw);
   line-height: 130%;
   padding: 0.3em;

   @media only screen and (max-width: 1024px) {
    position: relative;
    left: 0;
    margin-top: 2em;
    bottom: 0;
    right: 0;
    font-size: calc(0.5em + 0.6vw);
   }

   @media only screen and (max-width: 824px){
     font-size: calc(0.4em + 0.65vw);
     position: absolute;
   }

   @media only screen and (max-width: 570px){
     font-size: calc(0.4em + 1.6vw);
     bottom: 0;
   }
 `

 export const Address = styled.address`
   margin-top: 3em;
   font-size: calc(0.5em + 0.1vw);
   color: ${color.darkLinkO};
   font-weight: ${weight.bold};
   line-height: 170%;
   font-style: normal;
   font-family: ${font.heebo};
   letter-spacing: ${spacing.large};
   @media only screen and (max-width: 1024px) {
     margin-bottom: 0.9em;
     font-size: calc(0.3em + 1vw);
     margin-top: 1.5em;
   }

   @media only screen and (max-width: 824px){
     font-size: calc(0.3em + 1.2vw);
   }

   @media only screen and (max-width: 570px){
     margin-top: 1em;
     font-size: calc(0.3em + 2.3vw);
   }
 `

 export const AddressLink = styled.a`
   margin-top: 2em;
   color: ${color.darkLinkO};
   font-weight: ${weight.bold};
   line-height: 150%;
   font-style: normal;
   font-family: ${font.heebo};
   letter-spacing: ${spacing.large};
   transition: 600ms;
   &: hover {
     color: ${color.darkLink};
     font-size: ${weight.black};
   }
 `

 export const MenuList = styled.li`
   list-style: none;
   padding-top: 0.5em;
   padding-bottom: 0.5em;
   @media only screen and (max-width: 1024px) {
     padding: 1em 0;
     width: 100%;
     margin: 0;
   }
   @media only screen and (max-width: 824px) {
     padding: 1em 0;
   }

 `
 export const MenuLinksWrapper = styled.ul`
   border: 0.3em solid ${color.secondary};
   overflow: hidden;
   text-align: center;
   height: 25em;
   margin-left: 0.5em;
   padding: 1.8em;
   box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
   @media only screen and (max-width: 1024px) {
     border: 0px;
     box-shadow: none;
     margin-left: 0;
     display: flex;
     flex-direction: column;
     align-items: space-around;
     justify-content: space-around;
     height: auto;
     width: 100%;
   }
  @media only screen and (max-width: 570px) {
    margin: 1em;
    width: 90%;
  }
  @media only screen and (max-height: 424px) {
    height: auto;
  }
 `

 export const BackText = styled.p`
   color: ${color.primary};
   font-family: ${font.muli};
   font-weight: ${weight.black};
   letter-spacing: ${spacing.narrow};
   font-size: calc(0.7em + 0.5vw);
   line-height: 105%;
   width: 100%;

   @media only screen and (max-width: 1024px) {
    text-align: center;
    width: 100%;
    font-size: calc(0.7em + 1.8vw);
   }
   @media only screen and (max-width: 824px){
     font-size: calc(0.7em + 1.9vw);
   }

   @media only screen and (max-width: 570px){
     font-size: calc(0.7em + 2.7vw);
   }
 `

export const Divider = styled.div`
   width: 5em;
   height: 0.2em;
   background-color: white;
   margin: 1em auto 0;
`
