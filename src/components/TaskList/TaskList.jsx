import Task from "../Task/Task";
import "./TaskList.css";

export default function TaskList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
      {/* <Task task={tasks[0]} />
      <Task task={tasks[1]} />
      <Task task={tasks[2]} /> */}
    </ul>
  );
}
