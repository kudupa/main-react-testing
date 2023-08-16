import { useState } from "react";

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((prevValue) => prevValue + 1);
  const decrement = () => setCount((prevValue) => prevValue - 1);
  return { count, setCount, increment, decrement };
};

export default useCounter;
