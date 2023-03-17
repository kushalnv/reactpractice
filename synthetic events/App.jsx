import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      username:""
    }
  }
  
  render() {
    return (

      <>
<h1>{this.state.username}</h1>
<input type="text" onChange={(e)=>{
  this.setstate({username:e.target.value})
}}/>
      </>
    )
  }
}
