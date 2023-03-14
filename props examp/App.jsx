import React from 'react'
import Course from './Course'

const App = () => {
  return (
    <>
    <Course courseDetails={{
      courseName:"jfs",
      courseAvail:true,
      courseDur:"3mon"
    }}/>
    </>
  )
}

export default App