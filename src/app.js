import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HelloWorld from './components/HelloWorld'
import PageA from './components/PageA'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HelloWorld} />
      <Route path="/pagea/" component={PageA} />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pagea/">pagea</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  )
}

export default App