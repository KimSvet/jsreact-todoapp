import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      description: "Completed task",
      completed: true,
      date: new Date(),
    },
    { id: 1, description: "Editing task", completed: false, date: new Date() },
    { id: 2, description: "Active task", completed: false, date: new Date() },
  ]);
  return (
    <section className="todoapp">
      <Header />
      <main>
        <TaskList tasks={tasks} />
        <Footer />
      </main>
    </section>
  );
}

export default App;
