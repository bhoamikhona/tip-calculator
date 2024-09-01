import React from "react";

function Info({ title, children }) {
  return (
    <div className="info">
      <div className="info__left">
        <h2 className="title">{title}</h2>
        <span className="units">/ person</span>
      </div>
      <div className="info__right">
        <span className="amount">{children}</span>
      </div>
    </div>
  );
}

export default Info;
