import React,{Component}from 'react'
export default class App extends Component{
    
  render(){
    return(
        <>
        <form action="">
        <label htmlFor="username">username :</label><br/>
        <input type="text" id='username' /><br/>
        <label htmlFor="password">password :</label><br/>
        <input type="password" id='password' /><br/>
        <button onClick={(e)=>{
            e.preventDefault()
            let username=document.getElementById("username").value
            let password=document.getElementById("password").value
            console.log({username,password})
        }}>submit</button><br/>
        
        </form>
        </>
    )
  }
}