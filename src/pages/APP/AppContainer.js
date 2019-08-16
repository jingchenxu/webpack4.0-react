import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import PageA from '../../components/PageA'
import BottomNavigator from '../../components/BottomNavigator'
import IndexPage from '../IndexPage'
import UserCenter from '../UserCenter'
import ShopingCart from '../ShopingCart'


class AppContainer extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <div className="app-container">
    <Router>
      <Route path="/pagea/" component={PageA} />
      <Route path="/indexpage" component={IndexPage} />
      <Route path="/usercenter" component={UserCenter} />
      <Route path="/shopingcart" component={ShopingCart} />
      <BottomNavigator/>
    </Router>
    </div>
  }
}

export default AppContainer
