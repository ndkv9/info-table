import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

// helper hook for using data context
const useData = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error('the context must be used inside its provider')
  }

  return context
}

export default useData
