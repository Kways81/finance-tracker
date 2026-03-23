import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './SpendingChart.css'

export default function SpendingChart({ transactions }) {
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, transaction) => {
      const category = transaction.category
      const amount = parseFloat(transaction.amount)
      
      if (!acc[category]) {
        acc[category] = 0
      }
      acc[category] += amount
      
      return acc
    }, {})

  const chartData = Object.entries(expensesByCategory).map(([category, amount]) => ({
    category,
    amount: parseFloat(amount.toFixed(2))
  }))

  if (chartData.length === 0) {
    return (
      <div className="spending-chart">
        <div className="chart-card">
          <h2>Spending by Category</h2>
          <div className="no-data">
            <p>No expense data available</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="spending-chart">
      <div className="chart-card">
        <h2>Spending by Category</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis 
                dataKey="category" 
                stroke="rgba(255, 255, 255, 0.5)"
                tick={{ fill: 'rgba(255, 255, 255, 0.5)' }}
              />
              <YAxis 
                stroke="rgba(255, 255, 255, 0.5)"
                tick={{ fill: 'rgba(255, 255, 255, 0.5)' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: '#ffffff'
                }}
                formatter={(value) => [`$${value}`, 'Amount']}
              />
              <Area 
                type="monotone" 
                dataKey="amount" 
                stroke="#7dd3fc"
                fill="#7dd3fc"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}