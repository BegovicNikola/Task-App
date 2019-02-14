import React, { Component } from 'react'
import {Consumer} from '../../context'

class AddTask extends Component {
    state={
        title: '',
        description: ''
    }

    trackChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitTask = e => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="card mt-3">
                <div className="card-header bg-dark text-white">
                    <h3 className="">Add Task</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.submitTask}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input 
                            type="text" 
                            name="title" 
                            className="form-control" 
                            placeholder="Enter the title..." 
                            value={this.state.title}
                            onChange={this.trackChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea 
                            name="description" 
                            className="form-control" 
                            rows="5" 
                            placeholder="Description here..."
                            style={{resize: 'none'}}
                            value={this.state.description}
                            onChange={this.trackChange}>
                            </textarea>
                        </div>
                        <input type="submit" className="btn btn-dark btn-block"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddTask