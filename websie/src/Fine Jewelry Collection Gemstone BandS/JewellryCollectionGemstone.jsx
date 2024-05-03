import React from 'react'
import Navbarpage from '../Homepage/Navbarpage/Navbarpage'
import Footer from '../Homepage/Footer/Footer'
import FilterOfJewelleryGemstone from './Filter of Jewelery C/FilterOfJewelleryGemstone'
import GemstoneBandsRing from './Gemstone Ring Bands/GemstoneBandsRing'
import OnlyProductrRing from './Only Product  detail gemstone/OnlyProductrRing'

const JewellryCollectionGemstone = () => {
  return (
    <>

     <FilterOfJewelleryGemstone/>
     <GemstoneBandsRing/>
     <OnlyProductrRing/>
     <Footer/>
    </>
  )
}

export default JewellryCollectionGemstone
