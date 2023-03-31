
import React from "react"
import axiosInstance from "./axiosInstance"
const Createpost=()=>{
    let [coursename,setcoursename]=React.useState("")
    let[authorname,setauthorname]=React.useState("")

    let handleSubmit=async(e)=>{
        e.preventDefault()
        
            let payload={coursename,
            authorname}
            let data=await axiosInstance.post("/posts",payload)
            console.log(data)
        }
    
    return(
        <>
        <form action="" onClick={handleSubmit}>
        <label htmlFor="coursename">coursename</label>
        <input type="text" id="coursename" onChange={(e)=>{
        setcoursename (e.target.value);

        }} /><br />
        <label htmlFor="authorname">authorname</label>
        <input type="text" id="authorname" onChange={(e)=>{
            setauthorname(e.target.value)
        }}/><br />
        <button >submit</button>
        </form>
        </>
    )
}
export default Createpost