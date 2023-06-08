import React from 'react'
import { useState, useMemo } from 'react'

import './App.css'

const DEFAULT_WEIGHT = 50
const DEFAULT_HEIGHT = 150

const App = () => {
    const [weight, setWeight] = useState(DEFAULT_WEIGHT)
    const [height, setHeight] = useState(DEFAULT_HEIGHT)

    const onWeightChange = (event) => {
        const inputWeight = event.target.value
        setWeight(inputWeight)
    }

    const onHeightChange = (event) => {
        const inputHeight = event.target.value
        setHeight(inputHeight)
    }

    const output = useMemo(() => {
        const calculatedHeight = height / 100
        return (weight / (calculatedHeight * calculatedHeight)).toFixed(1)
    }, [weight, height])

  return (
    <div className='bg'>
        <h1>BMI Calculator</h1>
        <div className='input-section'>
            <p>Weight: {weight} kg</p>
            <input 
                onChange={onWeightChange}
                type='range'
                min='40'
                max='220'
            />
            <p>Height: {height} cm</p>
            <input 
                onChange={onHeightChange}
                type='range'
                min='140'
                max='220'
            />
        </div>
        <div className='output-section'>
            <p>Your BMI is</p>
            <p className='output-value'>{output}</p>
        </div>
    </div>
  )
}

export default App