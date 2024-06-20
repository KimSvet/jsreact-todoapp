import "./TasksFilter.css";
function TasksFilter({ name, selected, onClick }) {
  return (
    <li>
      <button className={selected ? "selected" : ""} onClick={onClick}>
        {name}
      </button>
    </li>
  );
}

export default TasksFilter;
