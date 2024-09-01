import React, { useState } from "react";
import TipButton from "./TipButton.jsx";

const TIP_PERCENTS = [5, 10, 15, 25, 50];

function Form() {
  const [error, setError] = useState(false);
  const [bill, setBill] = useState("");
  const [selectTipPercent, setSelectTipPercent] = useState(null);
  const [customTipPercent, setCustomTipPercent] = useState("");
  const [people, setPeople] = useState("");

  function handleTipButtonClick(percent) {
    setSelectTipPercent(percent);
    setCustomTipPercent("");
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const tip = selectTipPercent ? selectTipPercent : customTipPercent;

    alert(tip);
  }

  function handlePeopleChange(e) {
    const numOfPeople = Number(e.target.value);
    if (numOfPeople < 1) {
      setError(true);
    } else {
      setPeople(Number(e.target.value));
      setError(false);
    }
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="input-control">
        <label htmlFor="bill" className="label">
          Bill
        </label>
        <div className="input-container">
          <img
            className="icon"
            src="./images/icon-dollar.svg"
            alt="dollar icon"
            role="presentation"
          />
          <input
            className="input"
            type="number"
            id="bill"
            placeholder="0"
            autoComplete="off"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="input-control">
        <label className="label">Select Tip %</label>

        <div className="tip-options">
          {TIP_PERCENTS.map((percent) => (
            <TipButton
              key={percent}
              percent={percent}
              isSelected={percent === selectTipPercent}
              onSelectTipPercent={handleTipButtonClick}
            />
          ))}

          <input
            className="input custom"
            type="number"
            placeholder="custom"
            autoComplete="off"
            value={customTipPercent}
            onChange={(e) => setCustomTipPercent(Number(e.target.value))}
            onClick={() => setSelectTipPercent(null)}
          />
        </div>
      </div>

      <div className="input-control">
        <div className="label-container">
          <label htmlFor="people" className="label">
            Number of People
          </label>

          {error && (
            <label htmlFor="people" className="label error">
              Can't be zero
            </label>
          )}
        </div>
        <div className="input-container">
          <img
            className="icon"
            src="./images/icon-person.svg"
            alt="person icon"
            role="presentation"
          />
          <input
            className={`input ${error ? "error" : ""}`}
            type="number"
            id="people"
            placeholder="0"
            autoComplete="off"
            value={people}
            onChange={handlePeopleChange}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
