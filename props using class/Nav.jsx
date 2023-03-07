import React from "react";
import {components} from 'react';

class Nav extends components
{
    render()
    {
        return(
            <h1>{this.props.data}</h1>
        )
    }
}
export default Nav