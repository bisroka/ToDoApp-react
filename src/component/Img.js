import React from "react";
import picture from "../img/checklist.png";

const Img = props => {
  return <img src={picture} alt="" className={props.class} />;
};

export default Img;
