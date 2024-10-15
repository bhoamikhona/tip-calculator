import React, { useState } from "react";
import Form from "./Form.jsx";
import Display from "./Display.jsx";

function Calculator() {
  const [tipAmount, setTipAmount] = useState(Number(0).toFixed(2));
  const [totalAmount, setTotalAmount] = useState(Number(0).toFixed(2));
  const [reset, setReset] = useState(false);

  return (
    <main className="calculator">
      <Form
        onSetTipAmount={setTipAmount}
        onSetTotalAmount={setTotalAmount}
        reset={reset}
        onReset={setReset}
      />
      <Display
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        onReset={setReset}
      />
    </main>
  );
}

export default Calculator;
