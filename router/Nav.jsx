import React from "react"
import { Link } from "react-router-dom"


const Nav=()=>{
    return(
        <>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center" ,border:"2px solid blue",backgroundColor:"black"}}>
            <div style={{justifyContent:"center",width:"60px"}}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/1/1e/20211014045934%21Disney%2B_Hotstar_logo.svg/120px-Disney%2B_Hotstar_logo.svg.png" alt="" height="60px"/></div>
            <div>
                <ol style={{display:"flex",justifyContent:"space-around" ,listStyle:"none",textAlign:"center",color:"whitesmoke"}}>
                    <li style={{justifyContent:"space-between",paddingRight:"100px",color:"white"}}>
                    <Link to="/">Home</Link>    
                        </li>
                    <li style={{justifyContent:"space-between",paddingRight:"100px",color:"white"}}>
                    <Link to="/Signup">Signup</Link>    
                        </li>
                    <li style={{justifyContent:"space-between",paddingRight:"70px",color:"white"}}>
                      <Link to="/Login">Login</Link>  
                        </li>
                    <li style={{justifyContent:"space-between",paddingRight:"20px",color:"white"}}>
                      <Link to="/About">About</Link>  
                        </li>
                </ol>
            </div>
            <div style={{justifyContent:"center",border:"2px solid black"}} >
                <label htmlFor="search"><img src="https://tse2.mm.bing.net/th?id=OIP.RywTYtmkx5Y1LU8BLgZyYgHaHa&pid=Api&P=0" alt="" height="25px" width="30px" /></label>
                <input type="text" id="search" placeholder="Search" />
                
            </div>
        </div>

        </>
    )
    
}
export default Nav