import React from "react"
import PropTypes from 'prop-types'

const TaskInputGroup = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type='text'
        name={props.name}
        className={props.error.title ? "form-control is-invalid" : "form-control"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error.title ? <span className="invalid-feedback">Title is required!</span> : null}
    </div>
  );
};

TaskInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
}

export default TaskInputGroup;
