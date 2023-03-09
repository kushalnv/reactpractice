import React from 'react'
import Players from './Players'
import json from './userdata.json'
import './global.css'

const App = () => {
  return (
    <div>
      <Players payload={json}/>
    </div>
  )
}

export default App