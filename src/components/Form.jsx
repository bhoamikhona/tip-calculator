import React, { useEffect, useState } from "react";

function Form({ onSetTipAmount, onSetTotalAmount, reset, onReset }) {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState(1);
  const [isSelected, setIsSelected] = useState(null);
  const [customTipPercent, setCustomTipPercent] = useState("");

  const [errors, setErrors] = useState({
    billError: "",
    peopleError: "",
    tipError: "",
  });

  const handleBillChange = function (e) {
    const billAmount = Number(e.target.value);

    if (billAmount < 0) {
      return setErrors((err) => ({ ...err, billError: "Can't be negative" }));
    } else if (e.target.value === "") {
      setErrors((err) => ({ ...err, billError: "Can't be empty" }));
      return setBill("");
    } else {
      setErrors((err) => ({ ...err, billError: "" }));
      setBill(billAmount);
      return;
    }
  };

  const handlePeopleChange = function (e) {
    const numOfPeople = Number(e.target.value);

    if (e.target.value === "") {
      setErrors((err) => ({ ...err, peopleError: "Can't be empty" }));
      return setPeople("");
    } else if (numOfPeople === 0) {
      return setErrors((err) => ({ ...err, peopleError: "Can't be zero" }));
    } else if (numOfPeople < 0) {
      return setErrors((err) => ({
        ...err,
        peopleError: "Can't be negative",
      }));
    } else {
      setErrors((err) => ({ ...err, peopleError: "" }));
      setPeople(numOfPeople);
      return;
    }
  };

  const handleCustomTipPercent = function (e) {
    const percent = Number(e.target.value);

    if (e.target.value === "") {
      setErrors((err) => ({ ...err, tipError: "Can't be empty" }));
      return setCustomTipPercent("");
    } else if (percent < 0) {
      return setErrors((err) => ({ ...err, tipError: "Can't be negative" }));
      // return setCustomTipPercent(percent);
    } else {
      setErrors((err) => ({ ...err, tipError: "" }));
      setCustomTipPercent(percent);
      return;
    }
  };

  const handleTipSelection = function (tip) {
    setIsSelected(tip);
    setCustomTipPercent("");
    setErrors((err) => ({ ...err, tipError: "" }));
  };

  useEffect(() => {
    const tipPercent = isSelected === "custom" ? customTipPercent : isSelected;

    const tipAmountPerPerson = (bill * tipPercent) / 100 / people;
    const totalAmountPerPerson = bill / people + tipAmountPerPerson;

    onSetTipAmount(tipAmountPerPerson);
    onSetTotalAmount(totalAmountPerPerson);

    if (reset) {
      setBill("");
      setPeople(1);
      setIsSelected(null);
      setCustomTipPercent("");
      onReset(false);
    }
  }, [
    bill,
    people,
    isSelected,
    customTipPercent,
    onSetTipAmount,
    onSetTotalAmount,
    reset,
    onReset,
  ]);

  return (
    <div className="form">
      {/* Bill Input Control */}
      <div className="input-control">
        <div className="label-container">
          <label htmlFor="bill" className="label">
            Bill
          </label>

          <label htmlFor="bill" className="label error">
            {errors.billError}
          </label>
        </div>

        <div className="input-container">
          <img
            className="input-icon"
            src="./images/icon-dollar.svg"
            alt="dollar icon"
          />
          <input
            className={errors.billError ? "input error" : "input"}
            type="number"
            id="bill"
            autoComplete="off"
            placeholder="0"
            value={bill}
            onChange={handleBillChange}
          />
        </div>
      </div>

      {/* Tip Options */}
      <div className="input-control">
        <div className="label-container">
          <label className="label">Select Tip %</label>

          <label htmlFor="bill" className="label error">
            {errors.tipError}
          </label>
        </div>

        <div className="tip-options-container">
          {[5, 10, 15, 25, 50].map((tip) => (
            <button
              key={tip}
              className={`btn-tip-option ${
                isSelected === tip ? "selected" : ""
              }`}
              onClick={() => handleTipSelection(tip)}
            >
              {tip}%
            </button>
          ))}
          <input
            className={`input custom ${
              isSelected === "custom" ? "selected" : ""
            } ${errors.tipError ? "error" : ""}`}
            type="number"
            autoComplete="off"
            placeholder="custom"
            id="custom"
            value={customTipPercent}
            onChange={handleCustomTipPercent}
            onClick={() => setIsSelected("custom")}
          />
        </div>
      </div>

      {/* Number of People Input Control */}
      <div className="input-control">
        <div className="label-container">
          <label htmlFor="people" className="label">
            Number of People
          </label>

          <label htmlFor="people" className="label error">
            {errors.peopleError}
          </label>
        </div>

        <div className="input-container">
          <img
            className="input-icon"
            src="./images/icon-person.svg"
            alt="person icon"
          />
          <input
            className={errors.peopleError ? "input error" : "input"}
            type="number"
            id="people"
            autoComplete="off"
            placeholder="0"
            value={people}
            onChange={handlePeopleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
