import React from "react";
import PropTypes from "prop-types";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import "./Header.css";

function Header({ onAddTask }) {
  return (
    <header>
      <h1>todos</h1>
      <NewTaskForm onAddTask={onAddTask} />
    </header>
  );
}

Header.defaultProps = {
  onAddTask: () => {},
};

Header.propTypes = {
  onAddTask: PropTypes.func,
};

export default Header;
