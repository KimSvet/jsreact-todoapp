import Task from "./Task";

export default function TaskList({ tasks }) {
  return (
    <ul className="todo-list">
      <Task task={tasks[0]} />
      <Task task={tasks[1]} />
      <Task task={tasks[2]} />
    </ul>
  );
}
