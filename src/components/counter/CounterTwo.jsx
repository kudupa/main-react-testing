import React from "react";

const CounterTwo = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <>
      <h1>CounterTwo</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default CounterTwo;
