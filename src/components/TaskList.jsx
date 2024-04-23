import Task from "./Task";

export default function TaskList() {
  return (
    <ul className="todo-list">
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  );
}
