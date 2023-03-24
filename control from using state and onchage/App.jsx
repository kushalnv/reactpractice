import React,{Component} from 'react';

class App extends Component{
  constructor(){
    super()
    this.state={
                 username:"",
                 password:""
                 
    }
  }
handleSubmit=(e)=>{
e.preventDefault()
console.log(this.state.username)
console.log(this.state.password)
}
  
  render()
  {
    return(
      <>
      <form action="" onSubmit={this.handleSubmit}>
      <label htmlFor="username">username :</label><br />
      <input type="text" id='username'  onChange={(e)=>{
        e.preventDefault()
        this.setState({username:e.target.value})
      }
      }/ ><br />
      <label htmlFor="password">password:</label><br />
      <input type="password" id='password'  onChange={(y)=>{
        y.preventDefault()
        this.setState({password:y.target.value})



      }}/><br />
      <button on>Submit</button>
      </form>
      </>
    )
    
  }

}
export default App