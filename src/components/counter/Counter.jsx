import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Increment
      </button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.valueAsNumber)}
      />
      <button type="button" onClick={() => setCount(amount)}>
        Set
      </button>
    </div>
  );
};

export default Counter;
