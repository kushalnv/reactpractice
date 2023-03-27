import React from "react";
import Nav from './Nav';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home"
import Login from "./Login";
import Signup from "./Signup";
import About from "./About"

const App=()=>{
    return(
        <>
        <Router>
        <Nav/>
      
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/About" element={<About/>}/>

                
            </Routes>
        </Router>
          
        </>
    )
}
export default App