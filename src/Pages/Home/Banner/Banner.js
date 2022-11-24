import React from "react";
import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="flex items-center">
              <button className="btn btn-primary px-10">BUY</button>{" "}
              <p className="px-5">/</p>
              <button className="btn btn-primary px-10">SELL</button>
            </div>
            <p className="mb-5 text-xl mt-5">Your Favourite Mobile Phone!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
