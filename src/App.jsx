import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <main>
        <TaskList />
        <Footer />
      </main>
    </>
  );
}

export default App;
