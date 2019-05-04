import React from 'react'
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
                   this.state.naviList.map((item, index) => <div key={index} className="navi-item">{item.name}</div>)
               }
           </div>
           </div>
       )
   }
}

export default BottomNavigator