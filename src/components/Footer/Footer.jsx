import React from "react";
import PropTypes from "prop-types";
import TasksFilter from "../TasksFilter/TasksFilter";
import "./Footer.css";

function Footer({ filter, onFilterChange, onDeleteCompleted, taskCounter }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {taskCounter} {taskCounter === 1 ? "item" : "items"} left
      </span>
      <ul className="filters">
        <TasksFilter
          name="All"
          onClick={() => onFilterChange("All")}
          selected={filter === "All"}
        />
        <TasksFilter
          name="Active"
          onClick={() => onFilterChange("Active")}
          selected={filter === "Active"}
        />
        <TasksFilter
          name="Completed"
          onClick={() => onFilterChange("Completed")}
          selected={filter === "Completed"}
        />
      </ul>
      <button className="clear-completed" onClick={() => onDeleteCompleted()}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  filter: "All",
  onFilterChange: () => {},
  onDeleteCompleted: () => {},
  taskCounter: 0,
};

Footer.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  onDeleteCompleted: PropTypes.func,
  taskCounter: PropTypes.number,
};

export default Footer;
