import React from 'react'
const Signup=()=>{
    let[username,setusername]=React.useState("")
    let[password,setpassword]=React.useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log({username,password})
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        window.location.assign('/login')
    }
    
    return(
        <>
        <h1>Signup page</h1>
        <form action="">
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

            <button  onClick={handleSubmit}>SUBMIT</button>
        </form>
        </>
    )
}
export default Signup