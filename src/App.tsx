import { useEffect, useState } from 'react'
import './App.css'

interface StoplightState {
  delay: number,
  value: string
}

const stoplightStates:StoplightState[] = [
  {
    delay: 5000,
    value: 'red'
  },
  {
    delay: 2000,
    value: 'orange'
  },
  {
    delay: 5000,
    value: 'green'
  },
]

function App() {
  const [stoplightState, setStoplightState] = useState<StoplightState>(stoplightStates[0])

  useEffect(() => {
    const thisStateIndex:number = stoplightStates.findIndex((state) => state.value === stoplightState.value)
    const nextState:StoplightState = stoplightStates[(thisStateIndex+1) % stoplightStates.length]
    const timeoutId = setTimeout(() => {
      setStoplightState(nextState);
    }, stoplightState.delay);

    return () => clearTimeout(timeoutId);
  }, [stoplightState])

  return (
    <>
      <div className='container'>
        {stoplightStates?.map((light) => (
          <div className='light' style={{backgroundColor: stoplightState.value === light.value ? light.value : ''}}>
          </div>
        ))}

      </div>

    </>
  )
}

export default App
