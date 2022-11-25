import React from "react";
import img from "../../assets/images/404 Error-bro.svg";

const NotFound = () => {
  return (
    <div className="w-1/2 mx-auto">
      <img style={{ width: "800px" }} src={img} alt="" />
    </div>
  );
};

export default NotFound;
