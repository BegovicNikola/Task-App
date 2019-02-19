import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {Consumer} from '../../context'

class Task extends Component {

    state = {
        showField: false
    }

    deleteTask = (id, dispatch) => {
        dispatch({type: 'DELETE_TASK', payload: id})
    }

    showFieldClick = () => {
        this.setState({showField: !this.state.showField})
    }

    render() {
    const {task} = this.props
    const {showField} = this.state
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value
                    return(
                        <div className="card mt-3">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h3 className="card-title mb-0 mr-1">{task.title}</h3>
                                        <span className="fa fa-chevron-circle-down" onClick={this.showFieldClick}></span>
                                    </div>
                                    <span className="fa fa-times-circle" onClick={this.deleteTask.bind(this, task.id, dispatch)}></span>
                                </div>
                                {showField ? (
                                    <p className="card-text">{task.body}</p>
                                ) : null}
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task