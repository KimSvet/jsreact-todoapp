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
  const [filter, setFilter] = useState("All");

  const handleAddTask = (taskDescription) => {
    let newId = tasks[tasks.length - 1].id + 1;
    setTasks([
      ...tasks,
      {
        id: newId,
        description: taskDescription,
        completed: false,
        date: new Date(),
      },
    ]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleDeleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

  const handleDeleteCompleted = () =>
    setTasks(tasks.filter((task) => !task.completed));

  const handleChangeStatus = (taskId) =>
    setTasks(
      tasks.map((task) =>
        taskId === task.id ? { ...task, completed: !task.completed } : task
      )
    );

  function handleDescriptionChange(taskId, newDescription) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      )
    );
  }
  return (
    <section className="todoapp">
      <Header onAddTask={handleAddTask} />
      <main>
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={handleDeleteTask}
          onChangeStatus={handleChangeStatus}
          onDescriptionChange={handleDescriptionChange}
        />
        <Footer
          filter={filter}
          onFilterChange={handleFilterChange}
          onDeleteCompleted={handleDeleteCompleted}
        />
      </main>
    </section>
  );
}

export default App;
