import { useState } from 'react'

import './App.css'

function App() {
  
  // bring time 
  let time = new Date().toLocaleTimeString()

  // hooks 
  const [ctime, setCtime]  = useState(time); //initial data

  // time func on click
  const UpdateTime = () => {

    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(UpdateTime, 1000);

  return (
    <div className="App">
      <h2>Digital Time</h2>
      <h1>{ctime}</h1>
    </div>
  )
}

export default App
