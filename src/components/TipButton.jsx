import React from "react";

function TipButton({ percent, isSelected, onSelectTipPercent }) {
  return (
    <button
      className={`tip-option ${isSelected ? "active" : ""}`}
      value={percent}
      onClick={() => onSelectTipPercent(percent)}
    >
      {percent}%
    </button>
  );
}

export default TipButton;
