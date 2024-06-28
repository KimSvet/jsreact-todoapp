import NewTaskForm from "../NewTaskForm/NewTaskForm";
import "./Header.css";

function Header({ onAddTask }) {
  return (
    <header>
      <h1>todos</h1>
      <NewTaskForm onAddTask={onAddTask} />
    </header>
  );
}

Header.defaultProps = {
  onAddTask: () => {},
};

export default Header;
