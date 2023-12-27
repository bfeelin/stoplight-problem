import { useEffect, useState } from 'react'
import './App.css'

interface StoplightState {
  value: number,
  delay: number
}

const stoplightStates:StoplightState[] = [
  {
    value: 0,
    delay: 5000
  },
  {
    value: 1,
    delay: 2000
  },
  {
    value: 2,
    delay: 5000
  }
]

function App() {
  const [stoplightState, setStoplightState] = useState<StoplightState>(stoplightStates[0])

  useEffect(() => {
    const nextState:StoplightState = stoplightStates[(stoplightState.value+1) % stoplightStates.length]
    const timeoutId = setTimeout(() => {
      setStoplightState(nextState);
    }, stoplightState.delay);

    return () => clearTimeout(timeoutId);
  }, [stoplightState])

  return (
    <>
      <div className='container'>
        <div className='light' style={{backgroundColor: stoplightState.value === 0 ? 'red' : ''}}>

        </div>
        <div className='light'  style={{backgroundColor: stoplightState.value === 1 ? 'orange' : ''}}>
          
        </div>
        <div className='light'  style={{backgroundColor: stoplightState.value === 2 ? 'green' : ''}}>
          
        </div>
      </div>

    </>
  )
}

export default App
