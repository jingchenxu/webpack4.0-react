import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './app.css'
import HelloWorld from './components/HelloWorld'
import PageA from './components/PageA'
import BottomNavigator from './components/BottomNavigator'
import IndexPage from './pages/IndexPage'
import UserCenter from './pages/UserCenter'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HelloWorld} />
      <Route path="/pagea/" component={PageA} />
      <Route path="/indexpage" component={IndexPage} />
      <Route path="UserCenter" component={UserCenter} />
      <BottomNavigator/>
    </Router>
  )
}

export default App