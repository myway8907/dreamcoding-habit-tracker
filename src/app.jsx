import React, { useState } from "react";
import "./app.css";
import Habits from "./components/habits";
import Nav from "./components/nav";
import { nanoid } from "nanoid";

function App() {
  const [habits, setHabits] = useState([
    { id: nanoid(3), name: "Reading", count: 0 },
    { id: nanoid(3), name: "Running", count: 0 },
    { id: nanoid(3), name: "Coding", count: 0 },
  ]);

  return (
    <>
      <Nav totalNum={habits.filter((item) => item.count > 0).length} />
      <Habits habits={habits} setHabits={setHabits} />
    </>
  );
}

export default App;
