import React, { useState } from 'react';
import './App.css';


const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Avoid using eval in production apps due to security risks.
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
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
        <button onClick={calculate}>=</button>
        <button onClick={() => setInput(input + '/')}>/</button>
        <button className="clear" onClick={clear}>C</button>
      </div>
      <h2>Result: {result !== null ? result : 'N/A'}</h2>
    </div>
  );
};

export default Calculator;
