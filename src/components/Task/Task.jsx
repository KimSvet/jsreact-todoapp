import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import react, { useState } from "react";
import "./Task.css";

function Task({
  id,
  completed,
  description,
  date,
  onDeleteTask,
  onChangeStatus,
  onDescriptionChange,
}) {
  const [editing, setEditing] = useState(false);

  function handleOpenEdit() {
    setEditing(true);
  }
  function handleDescriptionChange(event) {
    if (event.key === "Enter") {
      onDescriptionChange(id, event.target.value);
      setEditing(false);
    }
  }
  let classes = completed === true ? "completed" : "";
  if (editing) classes += " editing";
  return (
    <li className={classes}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed === true ? true : false}
          onChange={() => onChangeStatus(id)}
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

Task.defaultProps = {
  id: 0,
  completed: false,
  description: "",
  date: new Date(),
  onDeleteTask: () => {},
  onChangeStatus: () => {},
  onDescriptionChange: () => {},
};

Task.propTypes = {
  id: PropTypes.number,
  completed: PropTypes.bool,
  description: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onDeleteTask: PropTypes.func,
  onChangeStatus: PropTypes.func,
  onDescriptionChange: PropTypes.func,
};

export default Task;
