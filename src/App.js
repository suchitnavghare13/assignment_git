import React, { useState } from 'react';
import './App.css';

const AdvancedCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  // Handle user input
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // Basic calculation
  const calculate = () => {
    try {
      setResult(eval(input)); // Avoid using eval in production apps
    } catch (error) {
      setResult('Error');
    }
  };

  // Increment the result by 2
  const incrementBy2 = () => {
    try {
      const currentResult = eval(input);
      if (!isNaN(currentResult)) {
        setResult(currentResult + 2);
      } else {
        setResult('Error');
      }
    } catch (error) {
      setResult('Error');
    }
  };

  // Clear the input and result
  const clear = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className="calculator">
      <h1>Advanced Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Enter expression"
      />
      <div className="buttons">
        <button onClick={() => setInput(input + '1')}>1</button>
        <button onClick={() => setInput(input + '2')}>2</button>
        <button onClick={() => setInput(input + '3')}>3</button>
        <button onClick={() => setInput(input + '+')}>+</button>
        <button onClick={() => setInput(input + '4')}>4</button>
        <button onClick={() => setInput(input + '5')}>5</button>
        <button onClick={() => setInput(input + '6')}>6</button>
        <button onClick={() => setInput(input + '-')}>-</button>
        <button onClick={() => setInput(input + '7')}>7</button>
        <button onClick={() => setInput(input + '8')}>8</button>
        <button onClick={() => setInput(input + '9')}>9</button>
        <button onClick={() => setInput(input + '*')}>*</button>
        <button onClick={() => setInput(input + '0')}>0</button>
        <button onClick={() => setInput(input + '.')}>.</button>
        <button onClick={() => setInput(input + '/')}>/</button>
        <button onClick={calculate}>=</button>
        <button onClick={incrementBy2}>+2</button>
        <button className="clear" onClick={clear}>C</button>
      </div>
      <h2>Result: {result !== null ? result : 'N/A'}</h2>
    </div>
  );
};

export default AdvancedCalculator;
