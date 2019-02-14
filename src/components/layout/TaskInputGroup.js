import React from "react"
import PropTypes from 'prop-types'

const TaskInputGroup = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>Title</label>
      <input
        type={props.type}
        name={props.name}
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.trackChange}
      />
    </div>
  );
};

TaskInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  trackChange: PropTypes.func.isRequired
}

TaskInputGroup.propTypes = {
  type: "text"
}

export default TaskInputGroup;
