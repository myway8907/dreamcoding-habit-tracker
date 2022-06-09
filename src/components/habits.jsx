import React, { useCallback } from "react";
import Habit from "./habit";
import AddHabit from "./addHabit";
import { nanoid } from "nanoid";

export default function Habits({ habits, setHabits }) {
  const handleIncrement = useCallback((habit) => {
    setHabits((prev) => {
      return prev.map((item) => {
        if (habit.id === item.id) {
          return { ...item, count: habit.count + 1 };
        }
        return item;
      });
    });
  }, []);

  const handleDecrement = useCallback((habit) => {
    setHabits((prev) => {
      return prev.map((item) => {
        if (item.id === habit.id) {
          return { ...item, count: habit.count === 0 ? 0 : habit.count - 1 };
        }
        return item;
      });
    });
  }, []);

  const handleDelete = useCallback((habit) => {
    setHabits((prev) => {
      return prev.filter((item) => item.name !== habit.name);
    });
  }, []);

  const handleReset = useCallback(() => {
    const temp = habits.map((item) => {
      item.count = 0;
      return item;
    });

    setHabits(() => {
      return [...temp];
    });
  }, []);

  const handleAdd = useCallback((name) => {
    setHabits((prev) => {
      const habits = [...prev, { id: nanoid(3), name, count: 0 }];
      return habits;
    });
  }, []);

  return (
    <div>
      <AddHabit onAdd={handleAdd} />
      <ul id='habit-list'>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      <button className='habits-reset' onClick={handleReset}>
        Reset All
      </button>
    </div>
  );
}
