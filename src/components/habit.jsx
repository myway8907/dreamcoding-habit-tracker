import React from "react";

export default React.memo(function Habit({
  habit,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) {
  return (
    <li className='habit'>
      {/* <span className='habit-name'>{habit.name}</span> */}
      <span className='habit-name'>jongho</span>
      <span className='habit-count'>{habit.count}</span>
      <button
        className='habit-button habit-increase'
        onClick={() => {
          handleIncrement(habit);
        }}
      >
        <i className='fa-solid fa-square-plus'></i>
      </button>
      <button
        className='habit-button habit-decrease'
        onClick={() => {
          handleDecrement(habit);
        }}
      >
        <i className='fa-solid fa-square-minus'></i>
      </button>
      <button
        className='habit-button habit-delete'
        onClick={() => {
          handleDelete(habit);
        }}
      >
        <i className='fa-solid fa-trash-can'></i>
      </button>
    </li>
  );
});
