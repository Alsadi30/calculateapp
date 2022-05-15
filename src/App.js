import { useState } from 'react'
import History from './components/history'
import Input from './components/input'
import getId from './utils/generateId'

const InitialInputState = {
  a: 20,
  b: 10
}

function App () {
  const [inputState, setInputState] = useState({ ...InitialInputState })
  const [result, setResult] = useState(0)
  const [histories, setHistories] = useState([])
  const [restoredHistory, setRestoredHistory] = useState(null)

  const handleInputFields = e => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value)
    })
  }

  const handleClearOps = () => {
    setInputState({ ...InitialInputState })
    setResult(0)
  }

  const handleArithmeticOps = operation => {
    if (!inputState.a || !inputState.b) {
      alert('Invalid Input')
      return
    }

    const f = new Function(
      'operation',
      `
		  return ${inputState.a} ${operation} ${inputState.b}
		`
    )
    const result = f(operation)
    setResult(result)
    // setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

    const historyItem = {
      id: getId.next().value,
      inputs: { ...inputState },
      operation,
      result,
      date: new Date()
    }
    setHistories([historyItem, ...histories])
  }

  const handleRestoreBtn = historyItem => {
    setInputState({ ...historyItem.inputs })
    setResult(historyItem.result)
    setRestoredHistory(historyItem.id)
  }

  return (
    <div className='App'>
      <Input
        result={result}
        inputState={inputState}
        handleInputFields={handleInputFields}
        handleArithmeticOps={handleArithmeticOps}
        handleClearOps={handleClearOps}
      />

      <History
        histories={histories}
        handleRestoreBtn={handleRestoreBtn}
        restoredHistory={restoredHistory}
      />
    </div>
  )
}

export default App
