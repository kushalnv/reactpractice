import React from "react";
import {component} from 'react';

class Nav extends component
{
    render()
    {
        return(
            <h1>{this.props.data}</h1>
        )
    }
}
export default Nav
