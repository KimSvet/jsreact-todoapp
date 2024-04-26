function TasksFilter({ name, selected }) {
  return (
    <li>
      <button className={selected ? "selected" : ""}>{name}</button>
    </li>
  );
}

export default TasksFilter;
