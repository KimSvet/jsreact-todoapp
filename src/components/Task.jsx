function Task({ task: { status, description } }) {
  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <br />
          {/* <span className="created">created n seconds ago</span> */}
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" defaultValue="Editing task"></input>
    </li>
  );
}

export default Task;
