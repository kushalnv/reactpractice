import React, { Component } from 'react';
import Student from './Student.jsx';
import Json from  './userdata.Json'
export default class App extends Component {
  constructor()
  {
    super()
    this.state=
    {
      json:Json
    }
  }
  render() {
    return (
      <div>
        <Student data={this.state.json}/>
      </div>
    )
  }
}
