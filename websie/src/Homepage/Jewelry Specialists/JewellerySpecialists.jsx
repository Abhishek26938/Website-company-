import React from 'react'
import './Jewellery.css'

const JewellerySpecialists = () => {
  return (
    <>
        {/*----------------------------------------- Consult Our Jewelry Specialists ---------------------*/}
      {/*----------------------------------------- Consult Our Jewelry Specialists ---------------------*/}
      <div className="Consult_our_jewellery">
        <img
          src="https://d3kinlcl20pxwz.cloudfront.net/imgs/main/cunsult_img_mob_v1.webp"
          alt=""
        />
        <div className="consult_juwellery">
          <h2>Consult Our Jewelry Specialists</h2>
          <span>
            {" "}
            A more thoughtful way to experience fine jewelry, built <br />{" "}
            around you. Collaborate with our certified gemologists to <br />{" "}
            curate your unique rings, earrings, pendants, bands or <br />{" "}
            bracelets.
          </span>
          <input type="text" placeholder="  visit showroom" />
        </div>
      </div>
    </>
  )
}

export default JewellerySpecialists
