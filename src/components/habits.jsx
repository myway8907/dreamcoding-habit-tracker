import React, { useState } from "react";
import Habit from "./habit";
import { nanoid } from "nanoid";

export default function Habits({ habits, setHabits }) {
  // const [habits, setHabits] = useState([
  //   { name: "Reading", count: 0 },
  //   { name: "Running", count: 0 },
  //   { name: "Coding", count: 0 },
  // ]);

  const handleIncrement = (habit) => {
    setHabits((prev) => {
      return prev.map((item) => {
        if (habit.name === item.name) {
          return { ...item, count: habit.count + 1 };
        }
        return item;
      });
    });
  };

  const handleDecrement = (habit) => {
    setHabits((prev) => {
      return prev.map((item) => {
        if (item.name === habit.name) {
          return { ...item, count: habit.count === 0 ? 0 : habit.count - 1 };
        }
        return item;
      });
    });
  };
  const handleDelete = (habit) => {
    setHabits((prev) => {
      return prev.filter((item) => item.name !== habit.name);
    });
  };

  return (
    <ul>
      {habits.map((habit) => (
        <Habit
          key={nanoid(3)}
          habit={habit}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
