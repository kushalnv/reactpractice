import React from  "react"
const App=()=>{
  let [username,setusername]=React.useState("")
  let [password,setpassword]=React.useState("")
  let handelSubmit=(e)=>{
    e.preventDefault()
    console.log({username,password})

  }
  return(
    <>
    <form action="" onSubmit={handelSubmit}>
      <label htmlFor="username">username:</label><br />
      <input type="text" id="username" onChange={(e)=>{
        e.preventDefault()
        setusername(e.target.value)
      }} /><br />
      <label htmlFor="password">password</label><br />
      <input type="text" id="password" onChange={(e)=>{
        e.preventDefault()
        setpassword(e.target.value)
      }} /><br />
      <button>submit</button>
    </form>

    </>
  )
}
export default App