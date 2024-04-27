import TasksFilter from "../TasksFilter/TasksFilter";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters">
        <TasksFilter name="All" selected={true} />
        <TasksFilter name="Active" selected={false} />
        <TasksFilter name="Completed" selected={false} />
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
