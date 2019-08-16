import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './app.css'
import HelloWorld from './components/HelloWorld'
import Login from './pages/Login'
import AppContainer from './pages/APP/AppContainer'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HelloWorld} />
      <Route path="/login" component={Login} />
      <Route path="/app" component={AppContainer} />
    </Router>
  )
}

export default App