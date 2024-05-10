import { formatDistanceToNow } from "date-fns";
import react, { useState } from "react";
import "./Task.css";
// function Task(props) {
//   console.log(props);
//   return "lalala";
// }

function Task({ completed, description, date }) {
  const [status, setStatus] = useState(completed);
  function handleCheckboxChange() {
    setStatus(!status);
  }
  return (
    <li className={status === true ? "completed" : ""}>
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
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" defaultValue="Editing task"></input>
    </li>
  );
}

export default Task;
