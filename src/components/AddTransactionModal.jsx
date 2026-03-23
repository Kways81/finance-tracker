import { useState } from 'react'
import './AddTransactionModal.css'

const categories = ['Food', 'Transport', 'Shopping', 'Entertainment', 'Health', 'Salary', 'Other']

export default function AddTransactionModal({ isOpen, onClose, onAddTransaction }) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'expense',
    category: 'Food',
    date: new Date().toISOString().split('T')[0]
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.title || !formData.amount) {
      return
    }

    try {
      await onAddTransaction({
        ...formData,
        amount: parseFloat(formData.amount)
      })
      
      setFormData({
        title: '',
        amount: '',
        type: 'expense',
        category: 'Food',
        date: new Date().toISOString().split('T')[0]
      })
      
      onClose()
    } catch (error) {
      console.error('Error adding transaction:', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Transaction</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="transaction-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter transaction title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label>Type</label>
            <div className="type-toggle">
              <button
                type="button"
                className={`type-btn ${formData.type === 'income' ? 'active' : ''}`}
                onClick={() => setFormData(prev => ({ ...prev, type: 'income' }))}
              >
                Income
              </button>
              <button
                type="button"
                className={`type-btn ${formData.type === 'expense' ? 'active' : ''}`}
                onClick={() => setFormData(prev => ({ ...prev, type: 'expense' }))}
              >
                Expense
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}