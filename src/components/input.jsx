export default function Input ({
  result,
  inputState,
  handleInputFields,
  handleArithmeticOps,
  handleClearOps
}) {
  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Result: {result}</h1>
      <div>
        <p>Inputs</p>
        <input
          type='number'
          value={inputState.a}
          onChange={handleInputFields}
          name='a'
        />
        <input
          type='number'
          value={inputState.b}
          onChange={handleInputFields}
          name='b'
        />
      </div>
      <div>
        <p>Operations</p>
        <button onClick={() => handleArithmeticOps('+')}>+</button>
        <button onClick={() => handleArithmeticOps('-')}>-</button>
        <button onClick={() => handleArithmeticOps('*')}>*</button>
        <button onClick={() => handleArithmeticOps('/')}>/</button>
        <button onClick={() => handleArithmeticOps('%')}>%</button>
        <button onClick={handleClearOps}>Clear</button>
      </div>
    </div>
  )
}
