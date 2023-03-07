import React from "react";
import STYLE from './app.module.css'

const App=()=>{
    return(
        <>
    <nav>
        <div className={STYLE.aBlock}>
            <img src="https://tse1.mm.bing.net/th?id=OIP.I9cvYdJTPAHPFgk7z4wj7QHaEK&pid=Api&rs=1&c=1&qlt=95&w=179&h=100" alt="" />
        <ul className={STYLE.UL}>
            <li a href="">Home</li>
    
     
            <li a href="">Menu</li>
            
            
            <li a href="">options</li>
      
            <li a href="">About</li>
        
            <li a href="">Settings</li>
      
            <li a href="">Help</li>

            </ul>
            <button>Search</button>
        
        </div>
        
    </nav>



</>
    )
}
export default App