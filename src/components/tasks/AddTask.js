import React, { Component } from "react"
import { Consumer } from "../../context"
import TaskInputGroup from '../layout/TaskInputGroup'
import uuid from 'uuid'

class AddTask extends Component {
  state = {
    title: "",
    description: ""
  }

  trackChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitTask = (dispatch, e) => {
    e.preventDefault()
    
    const newTask = {
      id: uuid(),
      title: this.state.title,
      description: this.state.description
    }

    dispatch({type: 'ADD_TASK', payload: newTask})

    // Clear input fields
    this.setState({
      title: '',
      description: ''
    })
  }

  render() {

    return (
      <Consumer>
        {value => {
          const {dispatch} = value
          return(
            <div className="card mt-3">
              <div className="card-header bg-dark text-white">
                <h3 className="">Add Task</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.submitTask.bind(this, dispatch)}>
                  <TaskInputGroup 
                    name="title"
                    placeholder="Enter the title here..."
                    value={this.state.title}
                    onChange={this.trackChange}
                  />
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="5"
                      placeholder="Description here..."
                      style={{ resize: "none" }}
                      value={this.state.description}
                      onChange={this.trackChange}
                    />
                  </div>
                  <input type="submit" className="btn btn-dark btn-block" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddTask
