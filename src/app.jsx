import React, { useState } from "react";
import "./app.css";
import Habits from "./components/habits";
import Nav from "./components/nav";

function App() {
  const [habits, setHabits] = useState([
    { name: "Reading", count: 0 },
    { name: "Running", count: 0 },
    { name: "Coding", count: 0 },
  ]);

  return (
    <>
      <Nav />
      <Habits habits={habits} setHabits={setHabits} />
    </>
  );
}

export default App;
