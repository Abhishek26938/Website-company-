import React from 'react'
import Commondfile from '../../Commonnd/Commondfile'

const Brealetsofthebackgroundimage = () => {
    const style = {
        backgroundImage: "url('https://d3kinlcl20pxwz.cloudfront.net/images/new/bracelet-banner.jpg?format=webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "50vh",};

        const styledata = {
            fontSize: "22px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            lineHeight: "24px",
            textDecoration: "none",
            color: "Black",
            textTransform: "capitalize",
            letterSpacing: "1px",
          };
        
        
          const stylespna = {
            fontSize: "14px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "400",
            lineHeight: "22px",
            textDecoration: "none",
            color: "black",
            textTransform: "capitalize",
            letterSpacing: "1px"
          }

  return (

    <>  
     
    <Commondfile name = "BRACELETS" description ="From dazzling diamonds to the rich hue of colored gemstones, we have bracelets in every style for you"  style={style}  stylespna={stylespna}styledata={styledata} />


</>
  )
}

export default Brealetsofthebackgroundimage
