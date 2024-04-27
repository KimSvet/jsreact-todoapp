import { formatDistanceToNow } from "date-fns";
import "./Task.css";

function Task({ task: { status, description, date } }) {
  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" />
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
