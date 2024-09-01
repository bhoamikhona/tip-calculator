import React from "react";
import Form from "./Form.jsx";
import Display from "./Display.jsx";

function Calculator() {
  return (
    <main className="main">
      <article className="calculator">
        <Form />
        <Display />
      </article>
    </main>
  );
}

export default Calculator;
