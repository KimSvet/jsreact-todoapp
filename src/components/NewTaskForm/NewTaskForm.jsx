import PropTypes from "prop-types";
import "./NewTaskForm.css";
import { useState } from "react";

function NewTaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
    </form>
  );
}

NewTaskForm.defaultProps = {
  onAddTask: () => {},
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};
export default NewTaskForm;
