import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";

function App() {
  let tasks = [
    {
      id: 0,
      description: "Completed task",
      status: "completed",
      date: new Date(),
    },
    { id: 1, description: "Editing task", status: "editing", date: new Date() },
    { id: 2, description: "Active task", status: "", date: new Date() },
  ];
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
