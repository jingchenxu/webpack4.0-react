import React from 'react'

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Hello World'
    }
  }
  render () {
    return (
      <h1 onClick={() => this.handleClick()}>{this.state.title}</h1>
    )
  }
  handleClick () {
    alert('发生了点击事件')
  }
  componentDidMount () {
    console.dir('componentDidMount')
    console.dir(this)
  }
  componentDidCatch () {
    console.dir('componentDidCatch')
  }
  componentDidUpdate () {
    console.dir('componentDidUpdate')
  }
  componentWillMount () {
    console.dir('componentWillMount')
  }
  // componentWillReceiveProps () {
  //   console.dir('componentWillReceiveProps')
  // }
  componentWillUnmount () {
    console.dir('componentWillUnmount')
  }
  componentWillUpdate () {
    console.dir('componentWillUpdate')
  }
  componentDidCatch () {
    console.dir('componentDidCatch')
  }
  componentWillUnmount () {
    console.dir('componentWillUnmount')
  }
};

export default HelloWorld