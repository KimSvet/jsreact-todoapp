import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((task) => ({
          id: task.id,
          description: task.title,
          cpmpleted: task.completed,
          date: new Date(),
        }));
        setTasks(newData);
      })
      .catch((error) => console.error(error));
  }, []);
  const taskCounter = tasks.filter((task) => !task.completed).length;

  const handleAddTask = (taskDescription) => {
    let newId = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
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
          taskCounter={taskCounter}
        />
      </main>
    </section>
  );
}

export default App;
