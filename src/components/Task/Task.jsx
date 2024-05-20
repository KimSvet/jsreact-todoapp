import { formatDistanceToNow } from "date-fns";
import react, { useState } from "react";
import "./Task.css";

function Task({
  id,
  completed,
  description,
  date,
  onDeleteTask,
  onDescriptionChange,
}) {
  const [status, setStatus] = useState(completed);
  const [editing, setEditing] = useState(false);
  function handleCheckboxChange() {
    setStatus(!status);
  }
  function handleOpenEdit() {
    setEditing(true);
  }
  function handleDescriptionChange(event) {
    if (event.key === "Enter") {
      onDescriptionChange(id, event.target.value);
      setEditing(false);
    }
  }
  let classes = status === true ? "completed" : "";
  if (editing) classes += " editing";
  return (
    <li className={classes}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={status === true ? true : false}
          onChange={handleCheckboxChange}
        />
        <label>
          <span className="description">{description}</span>
          <br />
          <span className="created">
            created {formatDistanceToNow(date)} ago
          </span>
        </label>
        <button className="icon icon-edit" onClick={handleOpenEdit}></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDeleteTask(id)}
        ></button>
      </div>
      <input
        type="text"
        className="edit"
        defaultValue={description}
        onKeyDown={handleDescriptionChange}
      ></input>
    </li>
  );
}

export default Task;
