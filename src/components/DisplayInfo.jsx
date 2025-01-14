import React from "react";

function DisplayInfo({ children, amount }) {
  return (
    <div className="display-info">
      <div className="display-info__left">
        <h2 className="display-info__title">{children}</h2>
        <span className="display-info__unit">/ person</span>
      </div>
      <div className="display-info__right">
        <span className="display-info__amount">
          ${amount ? Number(amount).toFixed(2) : Number(0).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default DisplayInfo;
