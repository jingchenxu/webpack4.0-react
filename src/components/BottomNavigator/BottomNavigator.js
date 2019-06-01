import React from 'react'
import { Link } from 'react-router-dom'
import './BottomNavigator.css'

class BottomNavigator extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           naviList: [{
               name: '首页',
               path: 'indexpage'
           },{
               name: '用户中心',
               path: 'usercenter'
           },{
               name: '购物车',
               path: 'shopingcart'
           }]
       }
   } 
   render () {
       return (
           <div className="bottom-navigator">
           <div className="navi-container">
               {
                   this.state.naviList.map((item, index) => <Link key={index} to={item.path}><div className="navi-item">{item.name}</div></Link>)
               }
           </div>
           </div>
       )
   }
   handleLinkTo (route) {
     console.dir(route)
     location.href = route.path
   }
}

export default BottomNavigator