import React, { useState } from 'react';
import Keypad from './Keypad';
import calculate from '../logic/calculate';
import Header from './Header';
import '../styles/Calculator.css';

const Calculator = () => {
  const [displayed, setDisplayed] = useState({ total: 0, next: null, operation: null });

  const onClick = (e) => {
    setDisplayed((value) => calculate(value, e.target.innerText));
  };

  const { total, next, operation } = displayed;
  return (
    <>
      <Header />
      <main>
        <h2>Let&apos;s do some Math!</h2>
        <div className="calculator">
          <div className="result">
            {total}
            {operation}
            {next}
          </div>
          <Keypad click={onClick} />
        </div>
      </main>
    </>
  );
};

export default Calculator;
