import React, { Component } from "react"
import { Consumer } from "../../context"
import TaskInputGroup from '../layout/TaskInputGroup'
import axios from 'axios'
import uuid from 'uuid'

class AddTask extends Component {
  state = {
    title: "",
    body: "",
    error: {}
  }

  trackChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitTask = (dispatch, e) => {
    e.preventDefault()
    
    if(this.state.title === '' && this.state.body === ''){
      this.setState({error: {title: true, body: true}})
    }else if(this.state.title === '' && this.state.body !== ''){
      this.setState({error: {title: true, body: false}})
    }else if(this.state.body === '' && this.state.title !== ''){
      this.setState({error: {title: false, body: true}})
    }else{
      this.setState({error: {}})

      const newTask = {
        id: uuid(),
        title: this.state.title,
        body: this.state.body
      }

      // *** With remote api... not adding id properly used uuid() ***
      axios.post('https://jsonplaceholder.typicode.com/posts', newTask)
      .then(res =>
        dispatch({type: 'ADD_TASK', payload: newTask})
      )
      // dispatch({type: 'ADD_TASK', payload: newTask})

      // Clear input fields
      this.setState({
        title: '',
        body: ''
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
                    <label htmlFor="body">Description</label>
                    <textarea
                      name="body"
                      className={this.state.error.body ? "form-control is-invalid" : "form-control"}
                      rows="5"
                      placeholder="Description here..."
                      style={{ resize: "none" }}
                      value={this.state.body}
                      onChange={this.trackChange}
                    />
                    {this.state.error.body ? <span className="invalid-feedback">Description is required</span> : null}
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
