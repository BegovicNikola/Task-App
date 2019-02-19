import React, { Component } from "react"
import { Consumer } from "../../context"
import TaskInputGroup from '../layout/TaskInputGroup'
import uuid from 'uuid'

class AddTask extends Component {
  state = {
    title: "",
    description: "",
    error: {}
  }

  trackChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitTask = (dispatch, e) => {
    e.preventDefault()
    
    if(this.state.title === '' && this.state.description === ''){
      this.setState({error: {title: true, description: true}})
    }else if(this.state.title === '' && this.state.description !== ''){
      this.setState({error: {title: true, description: false}})
    }else if(this.state.description === '' && this.state.title !== ''){
      this.setState({error: {title: false, description: true}})
    }else{
      this.setState({error: {}})

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

      this.props.history.push('/')          

    }

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
                    label="Title"
                    placeholder="Enter the title here..."
                    value={this.state.title}
                    onChange={this.trackChange}
                    error={this.state.error}
                  />
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      className={this.state.error.description ? "form-control is-invalid" : "form-control"}
                      rows="5"
                      placeholder="Description here..."
                      style={{ resize: "none" }}
                      value={this.state.description}
                      onChange={this.trackChange}
                    />
                    {this.state.error.description ? <span className="invalid-feedback">Description is required</span> : null}
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
