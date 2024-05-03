import React from 'react'
import Commondfile from '../../Commonnd/Commondfile'

const Earringimageheader = () => {

    const style = {
      backgroundImage: "url('https://d3kinlcl20pxwz.cloudfront.net/images/new/earrings-banner.jpg?format=webp')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      height: "50vh",
    };

    
  

  return (
    <>
      <Commondfile name = "EARRING"  description = {`Frame your face with styles that sparkle from classic studs  to statement pieces of gemstone earrings`} style={style}/>
    </>
  )
}

export default Earringimageheader
