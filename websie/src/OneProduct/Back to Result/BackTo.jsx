import React from "react";
import './BackTo.css'

const BackTo = () => {
  return (
    <>
      {/*---------------------------------------------- see all spphire ------------------------------------*/}
      {/*---------------------------------------------- see all spphire ------------------------------------*/}
      <div className="back-to-sapphire">
        <div className="back-to-div">
          <a className="see-all" href="#">
            <i className="fa-solid fa-arrow-left" />
            See all Sapphires
          </a>
          <div className="statrus-n">
            <div className="share-icon">
              <i className="fa-solid fa-share-nodes" />
              <i className="fa-regular fa-heart" />
              <i className="fa-regular fa-star" />
            </div>
            <span>
              status: <a href="#">Available</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackTo;
