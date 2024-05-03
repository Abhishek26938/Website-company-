import React from 'react';
import './Ringimage.css';
import Commondfile from '../../Commonnd/Commondfile';

const Ringimagefolder = (props) => {
  const style = {
    backgroundImage: "url('https://d3kinlcl20pxwz.cloudfront.net/images/new/gemstone-engagement-ring.jpg?format=webp')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "50vh",};

  return (
    <>
      <Commondfile 
        name="RING" 
        description= "Gemstones made by nature, rings carefully handcrafted in NYC for you."
        style={style}  
      />
    </>
  );
};

export default Ringimagefolder;
