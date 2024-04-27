import NewTaskForm from "../NewTaskForm/NewTaskForm";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>todos</h1>
      <NewTaskForm />
    </header>
  );
}

export default Header;
