import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      username:""
    }
  }
  componentDidMount()
  {
    let input=document.querySelector('input')
    input.addEventListener('keypress',(e)=>{
      this.setState({username:e.target.value})
    })
  }
  render() {
    return (

      <>
<h1>{this.state.username}</h1>
<input type="text" />
      </>
    )
  }
}
