import './Dashboard.css'

export default function Dashboard({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0)
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0)
  
  const balance = totalIncome - totalExpenses

  return (
    <div className="dashboard">
      <div className="stat-cards">
        <div className="stat-card">
          <h3>Total Balance</h3>
          <p className={`amount ${balance >= 0 ? 'positive' : 'negative'}`}>
            ${balance.toFixed(2)}
          </p>
        </div>
        
        <div className="stat-card">
          <h3>Total Income</h3>
          <p className="amount positive">
            ${totalIncome.toFixed(2)}
          </p>
        </div>
        
        <div className="stat-card">
          <h3>Total Expenses</h3>
          <p className="amount negative">
            ${totalExpenses.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}