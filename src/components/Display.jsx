import React from "react";
import Info from "./Info.jsx";

function Display() {
  return (
    <div className="display">
      <div className="display__top">
        <Info title="Tip Amount">$4.27</Info>
        <Info title="Total">$32.79</Info>
      </div>
      <div className="display__bottom">
        <button className="reset-btn">reset</button>
      </div>
    </div>
  );
}

export default Display;
