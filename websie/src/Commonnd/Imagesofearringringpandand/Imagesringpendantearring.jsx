import React from 'react'
import { Link } from 'react-router-dom'

const Imagesringpendantearring = (props) => {
  return (
    <>
      {/*---------------------------------------------- Preset Rings Collections -----------------------------------------*/}
  {/*---------------------------------------------- Preset Rings Collections -----------------------------------------*/}
  <div className="Preset-ring-product">
    <div className="collorection-bar">
      <h3>Preset {props.Name} Collections</h3>
      <span>
       {props.Description}
      </span>
    </div>
    <div className="image_ring">
   <Link to={props.visite1}>   <div className="ring_imgesnew">
        <div className="ring_1 imagebord">
          <img src=
           {props.image1}
          />
        </div>
        <span>{props.Name1}</span>
      </div></Link>
      <Link to={props.visite2}>  <div className="ring_imgesnew">
        <div className="ring_2 imagebord">
        <img src=
           {props.image2}
          />
        </div>
        <span>{props.Name2}</span>
      </div></Link>
      <Link to={props.visite3}> <div className="ring_imgesnew">
        <div className="ring_3 imagebord">
        <img src=
           {props.image3}
          />
        </div>
        <span>{props.Name3}</span>
      </div></Link>
    </div>
  </div>

    </>
  )
}

export default Imagesringpendantearring
