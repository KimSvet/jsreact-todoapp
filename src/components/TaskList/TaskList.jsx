import Task from "../Task/Task";
import "./TaskList.css";

export default function TaskList({
  tasks,
  onDeleteTask,
  onChangeStatus,
  onDescriptionChange,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onDeleteTask={onDeleteTask}
          onChangeStatus={onChangeStatus}
          onDescriptionChange={onDescriptionChange}
        />
      ))}
    </ul>
  );
}
