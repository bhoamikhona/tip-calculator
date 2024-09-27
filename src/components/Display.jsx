import React from "react";
import DisplayInfo from "./DisplayInfo.jsx";

function Display() {
  return (
    <div className="display">
      <div className="display__top">
        <DisplayInfo amount={4.27}>Tip Amount</DisplayInfo>
        <DisplayInfo amount={32.79}>Total</DisplayInfo>
      </div>
      <div className="display__bottom">
        <button className="btn-reset">Reset</button>
      </div>
    </div>
  );
}

export default Display;
