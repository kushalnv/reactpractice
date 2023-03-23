import React, { Component } from 'react'
export default class App extends Component {
    constructor(){
        super()
        this.userRef=React.createRef()
        this.passRef=React.createRef()
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let username=this.userRef.current.value
        let password=this.passRef.current.value
        console.log({username,password})
    }
  render() {
    return (
      <div>
        <form action="" on onSubmit={this.handleSubmit}>
        <label htmlFor="username">username :</label><br/>
        <input type="text" id='username' ref={this.userRef} /><br/>
        <label htmlFor="password">password :</label><br/>
        <input type="password" id='password' ref={this.passRef} /><br/>
        <button >submit</button>
        </form>
      </div>
    )
  }
}
