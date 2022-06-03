import React, { useState } from "react";

export default function Habit() {
  const [count, setCount] = useState(0);

  const handleIncrement = (event) => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <li className='habit'>
      <span className='habit-name'>Reading</span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className='fa-solid fa-square-plus'></i>
      </button>
      <button className='habit-button habit-decrease' onClick={handleDecrement}>
        <i class='fa-solid fa-square-minus'></i>
      </button>
      <button className='habit-button habit-delete'>
        <i className='fa-solid fa-trash-can'></i>
      </button>
    </li>
  );
}
