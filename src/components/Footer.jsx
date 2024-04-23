import TasksFilter from "./TasksFilter";

function Footer() {
  return (
    <footer>
      <span className="todo-count">1 items left</span>
      <ul className="filters">
        <li>
          <TasksFilter />
        </li>
        <li>
          <TasksFilter />
        </li>
        <li>
          <TasksFilter />
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
