import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [stoplightState, setStoplightState] = useState("go")

  useEffect(() => {

  }, [])

  return (
    <>
      <div className='container'>
        <div className='light' style={{backgroundColor: stoplightState === "stop" ? 'red' : ''}}>

        </div>
        <div className='light'  style={{backgroundColor: stoplightState === "slow" ? 'orange' : ''}}>
          
        </div>
        <div className='light'  style={{backgroundColor: stoplightState === "go" ? 'green' : ''}}>
          
        </div>
      </div>

    </>
  )
}

export default App
