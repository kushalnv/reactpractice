import React,{Component} from "react"
const Hoc=(WrappedComponent)=>{
    return class Hoc extends Component
    {
        render()
        {
            return(
                <WrappedComponent data="hello"/>
            )
        }
    }
        
        
    
}
export default Hoc