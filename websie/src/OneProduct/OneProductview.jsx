import React from 'react'
import Navbarpage from '../Homepage/Navbarpage/Navbarpage'
import BackTo from './Back to Result/BackTo'
import SingleProduct from './SingleProduct/SingleProduct'
import CookiesProduct from './Cookies Product/CookiesProduct'
import ProductDetails from './Product Details/ProductDetails'
// npm
import Footer from '../Homepage/Footer/Footer'

const OneProductview = () => {
  return (
    <>
   
    <BackTo/>
    <SingleProduct/> 
    <CookiesProduct/>
    <ProductDetails/>
 {/* <ImportantFact/> */}
    <Footer/>
    </>
  )
}

export default OneProductview
