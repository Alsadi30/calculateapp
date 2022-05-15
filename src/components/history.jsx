export default function History ({
  histories,
  handleRestoreBtn,
  restoredHistory
}) {
  return (
    <div>
      <p>History</p>
      {histories.length === 0 ? (
        <p>
          <small>There is no history</small>
        </p>
      ) : (
        <ul>
          {histories.map(historyItem => (
            <li key={historyItem.id}>
              <p>
                Operation: {historyItem.inputs.a} {historyItem.operation}{' '}
                {historyItem.inputs.b}, Result: {historyItem.result}
              </p>
              <small>
                {historyItem.date.toLocaleDateString()}{' '}
                {historyItem.date.toLocaleTimeString()}
              </small>
              <br />
              <button
                onClick={() => handleRestoreBtn(historyItem)}
                disabled={
                  restoredHistory != null && restoredHistory === historyItem.id
                }
              >
                restore
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
