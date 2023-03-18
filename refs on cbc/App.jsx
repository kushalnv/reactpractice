import React, { Component } from 'react';

export default  class App extends Component{
  constructor(){
    super()
    this.state={
      name :"abcd"
    }
    this.h1Ref=React.createRef()
    this.btnRef=React.createRef()

  }
  render()
  {
    return(
      <>
      <h1 ref={this.h1Ref}>{this.state.name}</h1>
      <button ref={this.btnRef} onClick={()=>{
        this.setState({name:"ncbsjd"})
        this.h1Ref.current.style.color="red";
      }}>change</button>
      </>
    )
  }

}
