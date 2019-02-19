import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header'
import AddTask from './components/tasks/AddTask'
import Tasks from './components/tasks/Tasks'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {Provider} from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/add" component={AddTask} />
                <Route exact path="/" component={Tasks} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
