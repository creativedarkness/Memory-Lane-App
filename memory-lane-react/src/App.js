import React, { Component } from 'react';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom"
import TaskApp from './components/TaskApp/TaskApp'
import CounterApp from './components/CounterApp/CounterApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul>
              <li className="navList"><Link to="/">Home</Link></li>
              <li className="navList"><Link to="/TaskApp">Task App</Link></li>
              <li className="navList"><Link to="/CounterApp">Counter App</Link></li>
            </ul>
            <Route path="/TaskApp" component={TaskApp} />
            <Route path="/CounterApp" component={CounterApp} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
