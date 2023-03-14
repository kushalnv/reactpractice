import React from 'react'

const Course = (props) => {
    if(props.courseDetails.courseAvail==true)
    {
        return(
            <>
            <h1>{props.courseDetails.courseName}</h1>
            <h2>{props.courseDetails.courseDur}</h2>
            <button style={{color:"green"}} >Avail</button>
            </>
        )
    }
    else{
        return(
            <>
            <h1>{props.courseDetails.courseName}</h1>
            <h2>{props.courseDetails.courseDur}</h2>
            <button style={{color:"red"}} >Avail</button>
            </>
        )
    }


  
  
}

export default Course