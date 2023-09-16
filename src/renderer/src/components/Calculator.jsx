import { useEffect, useState } from 'react'

let allowedValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '+',
  '-',
  '/',
  '*',
  '=',
  '.',
  'C',
  'Enter',
  'Backspace',
  'Delete'
]

const Calculator = () => {
  const [expression, setExpression] = useState('')

  let calculateExpression = (value) => {
    if (value === 'C') {
      setExpression('')
    } else if (value === '=' || value === 'Enter') {
      setExpression((expression) => `${eval(expression)}`)
    } else if (value === 'Backspace' || value === 'Delete') {
      setExpression((expression) => expression.substring(0, expression.length - 1))
    } else {
      setExpression((expression) => expression + value)
    }
  }

  let handleButtonClick = (e) => {
    let value = e.target.dataset.value
    if (value) {
      calculateExpression(value)
    }
  }

  let handleKeyDown = (e) => {
    let value = e.key
    if (value === 'Enter') {
      e.preventDefault()
    }
    if (allowedValues.includes(value)) {
      calculateExpression(value)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="container" onClick={handleButtonClick}>
      <div className="result-container">
        <span className="result">{expression}</span>
      </div>
      <div className="row">
        <button data-value="C">C</button>
        <button data-value="%">%</button>
        <button data-value="Backspace">&#x021D0;</button>
        <button data-value="/">/</button>
      </div>
      <div className="row">
        <button data-value="7">7</button>
        <button data-value="8">8</button>
        <button data-value="9">9</button>
        <button data-value="*">*</button>
      </div>
      <div className="row">
        <button data-value="4">4</button>
        <button data-value="5">5</button>
        <button data-value="6">6</button>
        <button data-value="+">+</button>
      </div>
      <div className="row">
        <button data-value="1">1</button>
        <button data-value="2">2</button>
        <button data-value="3">3</button>
        <button data-value="-">-</button>
      </div>
      <div className="row">
        <button data-value="**">**</button>
        <button data-value="0">0</button>
        <button data-value=".">.</button>
        <button data-value="=">=</button>
      </div>
    </div>
  )
}

export default Calculator
