import React from 'react'
import { createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ myName: 'Vu' }}>
      {children}
    </DataContext.Provider>
  )
}
