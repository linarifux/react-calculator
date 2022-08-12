import React, { useState } from "react"

function App() {

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const ops = ['/', '*', '+', '-', '.']
  const updateCalc = (value) => {
    // if its an operator
    if ((ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))) {
      return;
    }

    // if its a digit
    if(!ops.includes(value)){
      setResult(eval(calc + value))
    }

    // anyting else
    setCalc(calc + value)
  }

  const createDigits = () => {
    const digits = []
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateCalc(i)}>{i}</button>
      )
    }
    return digits
  }

  const calculate = () => {
    if(calc === 0){
      setCalc(0)
    }
    setCalc(eval(calc).toString())
  }

  const deleteLastDigit = () => {
    if(calc === ''){
      return;
    }
    const value = calc.slice(0, -1).toString()
    setCalc(value)
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
        {result === 0 && (<span>(0)</span>)}{result ? <span>({result})</span> : ''}&nbsp;{calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLastDigit}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
