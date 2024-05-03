import React from 'react'
import Navbarpage from '../Homepage/Navbarpage/Navbarpage'
import OnePandantGemstoneImage from './ONe Pandant Gemstone image and details/OnePandantGemstoneImage'
import OnePandantCookiesProduct from './One Pandant Coookes Product/OnePandantCookiesProduct'
import OnePandantAllAboutinfo from './One Pandant all about info/OnePandantAllAboutinfo'
// import ImportantFact from '../OneProduct/Important Facts/ImportantFact'
import Footer from '../Homepage/Footer/Footer'

const OnePandantGemstoneallFile = () => {
  return (
    <>
     
      <OnePandantGemstoneImage/>
      <OnePandantCookiesProduct/>
      <OnePandantAllAboutinfo/>
      {/* <ImportantFact/> */}
      <Footer/>
    </>
  )
}

export default OnePandantGemstoneallFile
