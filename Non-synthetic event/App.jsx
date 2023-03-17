import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      username:"abcd"
    }
  }
  componentDidMount()
  {
    let btn=document.querySelector('button')
    btn.addEventListener('click',()=>{
      this.setState({username:this.state.username='gfdagg'})
    })
  }
  render() {
    return (

      <>
<h1>{this.state.username}</h1>
<button>change</button>
      </>
    )
  }
}
