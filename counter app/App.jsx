import React, { Component } from 'react'
import './global.css'

export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      count:0
    }
  }
  handleincrement=()=>{
    this.setState({count:this.state.count+1})
  }
  handledecrement=()=>{
    this.setState({count:this.state.count-1})
  }
  handlereset=()=>{
this.setState({count:0})
  }
  render() {
    return (
    <>
      <div className='mainBlock'>
        <h1 id='sub'>{this.state.count}</h1>
        </div>
        <div className='buttons'>
          <button onClick={this.handleincrement}>increment+</button>
          <button onClick={this.handledecrement}>decrement-</button>
          <button onClick={this.handlereset}>reset</button>
      </div>
      </>
    )
  }
}
