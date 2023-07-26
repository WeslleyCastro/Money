import {  ReactNode, useState, useEffect, useCallback } from "react"
import { api } from "../lib/axios"
import { createContext } from "use-context-selector"

interface Transaction {
  id: number
  description: string
  type: string,
  price: number
  category: string
  createdAt: string
}


interface CreateTransactionInput{
  description: string
  price: number
  category: string
  type: string
}


interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransactions: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps{
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string){
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      }
    })
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setTransactions(response.data)
  }

  const createTransactions = useCallback(async(data: CreateTransactionInput) => {
    const { description, price, category, type} = data

    const response = await api.post("/transactions",{
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    }) 
  
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    setTransactions(state => [response.data, ...state])
  },[])


  useEffect(()=> {
    void fetchTransactions()
  }, [])


  return(
    <TransactionsContext.Provider value={{
      transactions, 
      fetchTransactions,
      createTransactions,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}