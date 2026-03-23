import './TransactionList.css'

export default function TransactionList({ transactions, onDeleteTransaction }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatAmount = (amount, type) => {
    const formatted = parseFloat(amount).toFixed(2)
    return type === 'income' ? `+£${formatted}` : `-£${formatted}`
  }

  if (transactions.length === 0) {
    return (
      <div className="transaction-list">
        <div className="list-card">
          <h2>Transactions</h2>
          <div className="no-transactions">
            <p>No transactions yet</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="transaction-list">
      <div className="list-card">
        <h2>Transactions</h2>
        <div className="transactions-container">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-row">
              <div className="transaction-info">
                <div className="transaction-date">
                  {formatDate(transaction.date)}
                </div>
                <div className="transaction-details">
                  <div className="transaction-title">{transaction.title}</div>
                  <span className="category-badge">{transaction.category}</span>
                </div>
              </div>
              <div className="transaction-amount-section">
                <div className={`transaction-amount ${transaction.type}`}>
                  {formatAmount(transaction.amount, transaction.type)}
                </div>
                <button 
                  className="delete-btn"
                  onClick={() => onDeleteTransaction(transaction.id)}
                  title="Delete transaction"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}