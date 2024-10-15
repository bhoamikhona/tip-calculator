import React from "react";
import DisplayInfo from "./DisplayInfo.jsx";

function Display({ tipAmount, totalAmount, onReset }) {
  return (
    <div className="display">
      <div className="display__top">
        <DisplayInfo amount={tipAmount}>Tip Amount</DisplayInfo>
        <DisplayInfo amount={totalAmount}>Total</DisplayInfo>
      </div>
      <div className="display__bottom">
        <button className="btn-reset" onClick={() => onReset(true)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Display;
