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

TasksFilter.defaultProps = {
  name: "All",
  selected: false,
  onClick: () => {},
};
export default TasksFilter;
