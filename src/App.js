import React, { Component } from 'react'
import Header from './components/layout/Header'
import AddTask from './components/tasks/AddTask'
import Tasks from './components/tasks/Tasks'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {Provider} from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <AddTask />
            <Tasks />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
