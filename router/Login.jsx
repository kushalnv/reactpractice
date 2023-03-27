import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const Login=()=>{
    
    let[username,setusername]=React.useState("")
    let[password,setpassword]=React.useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log({username,password})
       let a= localStorage.getItem("username",username)
       let b= localStorage.getItem("password",password)
        if(a===username &&b===password){
            
            toast.success("logged in suceesfully")

            }
    
        
        else{
            toast.warn("invalid")
        }

    }
    return(
        
        <>
        <h1>Login page</h1>
        <ToastContainer/>
        <form action="http://localhost:3000/Login" >
            <label htmlFor="username">USERNAME:</label><br />
            <input type="text" id='username' onChange={(e)=>{
                e.preventDefault()
             
                let a=e.target.value
                setusername(a)
            }}/><br />

            <label htmlFor="password">password</label><br />
            <input type="text" id='password' onChange={(e)=>{
                e.preventDefault()
                
                let b=e.target.value
                setpassword(b)
            }}/><br />

            <button onClick={handleSubmit}>SUBMIT</button>
        </form>
        </>
    )
}
export default Login