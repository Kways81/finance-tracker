import { useState } from 'react'
import { useTransactions } from './hooks/useTransactions'
import Dashboard from './components/Dashboard'
import SpendingChart from './components/SpendingChart'
import TransactionList from './components/TransactionList'
import AddTransactionModal from './components/AddTransactionModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { transactions, loading, error, addTransaction, deleteTransaction } = useTransactions()

  const handleAddTransaction = async (transactionData) => {
    await addTransaction(transactionData)
  }

  const handleDeleteTransaction = async (id) => {
    await deleteTransaction(id)
  }

  if (loading) {
    return (
      <div className="loading">
        <p>Loading transactions...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Finance Tracker</h1>
        <button 
          className="add-transaction-btn"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Transaction
        </button>
      </header>

      <main className="app-main">
        <Dashboard transactions={transactions} />
        <SpendingChart transactions={transactions} />
        <TransactionList 
          transactions={transactions} 
          onDeleteTransaction={handleDeleteTransaction}
        />
      </main>

      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTransaction={handleAddTransaction}
      />
    </div>
  )
}

export default App
