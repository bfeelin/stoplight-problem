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
  const [stoplightState, setStoplightState] = useState<number>(0)

  useEffect(() => {
    const nextState:StoplightState = stoplightStates[(stoplightState+1) % stoplightStates.length]
    const timeoutId = setTimeout(() => {
      setStoplightState(nextState.value);
    }, nextState.delay);

    return () => clearTimeout(timeoutId);
  }, [stoplightState])

  return (
    <>
      <div className='container'>
        <div className='light' style={{backgroundColor: stoplightState === 0 ? 'red' : ''}}>

        </div>
        <div className='light'  style={{backgroundColor: stoplightState === 1 ? 'orange' : ''}}>
          
        </div>
        <div className='light'  style={{backgroundColor: stoplightState === 2 ? 'green' : ''}}>
          
        </div>
      </div>

    </>
  )
}

export default App
