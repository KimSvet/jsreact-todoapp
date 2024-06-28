import "./TasksFilter.css";
import PropTypes from "prop-types";
function TasksFilter({ name, selected, onClick }) {
  return (
    <li>
      <button className={selected ? "selected" : ""} onClick={onClick}>
        {name}
      </button>
    </li>
  );
}

TasksFilter.defaultProps = {
  name: "All",
  selected: false,
  onClick: () => {},
};

TasksFilter.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};
export default TasksFilter;
