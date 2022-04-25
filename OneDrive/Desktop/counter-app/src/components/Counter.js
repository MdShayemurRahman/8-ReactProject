import React from 'react'
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = (counter) => {
    setCount(count + 1);
  };
  const decreaseCounter = (counter) => {
    setCount(count - 1);
  };
  return (
    <div className="counter-app">
      <h1>{count}</h1>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </div>
  );
}

export default Counter