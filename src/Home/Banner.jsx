import React from "react";
import "../Css/Style.css"

const Banner = () => {
  return (
    <>
      <div className="banner-outer">
          <div className="banner-inner">
            <img loading="lazy"  src="/assets/banner.jpg" alt="banner-img" />
          </div>
          <div className="banner-text">
            <h1 className="heading">Welcome to Our <br /> <span className="website">Website</span></h1>
            <div className="bnner-img">
                <img loading="lazy"  src="/assets/mini-dora.jpg " alt="doremon" className="doremon" />
                <img loading="lazy"  src="/assets/nobita.jpg" alt="nobita" className="nobita"/>
            </div>
          </div>
        </div>
    </>
  );
};

export default Banner;
