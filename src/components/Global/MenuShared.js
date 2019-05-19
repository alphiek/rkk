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
   @media only screen and (max-width: 1024px){
     width: 100%;
     height: 100vh;
     display: flex;
     align-items: center;
     justify-content: center;
   }
 `
export const AboutTitle = styled(H2Menu)`
   color: ${color.secondary};
   @media only screen and (max-width: 1024px){
     color: ${color.primary};
   }
 `

export const ContactTitle = styled(H2Menu)`
   margin-top: 0.2em;
   margin-bottom: 0.6em;
   color: ${color.primary};
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
     margin: 0 10%;
     height: auto;
     overflow: scroll;
     width: 80%;
     padding: 5%;
     border: 0.3em solid ${color.secondary};
     background-color: ${color.offWhite};
  }
    @media only screen and (max-width: 570px) {
      height: 65vh;
    }
 `
 export const ContactWrapper = styled(AboutWrapper)`
   margin-left: 0.5em;
   border: 0;
   position: relative;
   background: ${color.offWhite};
 @media only screen and (max-width: 1024px) {
   min-height: 31em;
 }
 @media only screen and (max-width: 570px) {
   min-height: 35em;
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
    width: 80%;
    left: 3;
    bottom: 4.5em;
    font-size: calc(0.4em + 0.39vw);
   }

   @media only screen and (max-width: 824px){
     font-size: calc(0.4em + 0.65vw);
   }

   @media only screen and (max-width: 570px){
     font-size: calc(0.4em + 1.6vw);
     width: 90%;
     left: 4em;
     bottom: 4.5em;
   }
 }
 `

 export const Address = styled.address`
   margin-top: 3em;
   font-size: 0.6em;
   color: ${color.darkLinkO};
   font-weight: ${weight.bold};
   line-height: 170%;
   font-style: normal;
   font-family: ${font.heebo};
   letter-spacing: ${spacing.large};
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
     padding: 0.7em 0;
     background-color: ${color.primary};
     border-radius: 0.2em;
     box-shadow: 21px 21px 24px -10px rgba(0,0,0,.27);
     width: 100%;
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
     margin-left: 0;
     margin: 2em 5em;
     border-radius: 0.2em;
     display: flex;
     flex-direction: column;
     align-items: space-around;
     justify-content: space-around;
     background-color: ${color.secondary};
     height: 80%;
     width: 80%;
   }
  @media only screen and (max-width: 570px) {
    margin: 2em;
  }
 `

 export const BackText = styled.p`
   color: ${color.primary};
   font-family: ${font.muli};
   font-weight: ${weight.black};
   letter-spacing: ${spacing.narrow};
   font-size: calc(0.7em + 0.5vw);
   line-height: 105%;

   @media only screen and (max-width: 1024px) {
     margin: 1em 0 ;
     font-size: calc(1.4em + 1.4vw);
   }
   @media only screen and (max-width: 824px){
     font-size: calc(1.4em + 2vw);
   }

   @media only screen and (max-width: 570px){
     font-size: calc(1.4em + 3.8vw);
   }

   @media only screen and (max-width: 321px){
     font-size: calc(1.4em + 2.5vw);
   }
 `
