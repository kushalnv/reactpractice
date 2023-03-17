import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  const App=()=>{
    let handlesubmit=()=>{
      toast.success("logged in")
    }
    return(
      <>
      <ToastContainer/>
      <button onClick={handlesubmit}>submit</button>
      </>

    )
  }
  export default App