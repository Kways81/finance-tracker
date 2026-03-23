import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useTransactions() {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTransactions = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .order('date', { ascending: false })
      
      if (error) throw error
      
      setTransactions(data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const addTransaction = async (transactionData) => {
    try {
      const { data, error } = await supabase
        .from('transactions')
        .insert([transactionData])
        .select()
      
      if (error) throw error
      
      await fetchTransactions()
      return data[0]
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const deleteTransaction = async (id) => {
    try {
      const { error } = await supabase
        .from('transactions')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      
      await fetchTransactions()
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return {
    transactions,
    loading,
    error,
    fetchTransactions,
    addTransaction,
    deleteTransaction
  }
}