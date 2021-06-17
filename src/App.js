import React from 'react'
import './App.css';
import BlogPage from './Component/BlogPage'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Component/HomePage';
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/blogs' component={BlogPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
