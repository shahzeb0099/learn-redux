import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../slice/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [amount, setAmount] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleAmount = () => {
    dispatch(incrementByAmount(amount));
    setAmount(0);
  };

  return (
    <div className="container">
      <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={handleAmount}>Add Amount</button>
    </div>
  );
};

export default Counter;
