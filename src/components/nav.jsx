import React from "react";

export default function Nav({ totalNum }) {
  return (
    <div className='navBar'>
      <i className='fa-solid fa-leaf'></i>
      <span className='habit-tracker-title'>Habit Tracker</span>
      <span className='habits-count'>{totalNum}</span>
    </div>
  );
}
