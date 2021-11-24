import React from 'react'
import { createContext, useReducer } from 'react'

export const DataContext = createContext()

const initialDataState = {
  data: [],
  isLoading: false,
  isDESC: true,
  isError: false,
  isFetchedAll: false,
}

const dataReducer = (previousState, action) => {
  let newState
  switch (action.type) {
  case 'LOAD_DATA':
    newState = { ...previousState }
    newState.data = newState.data.concat(action.payload)
    return newState

  case 'LOADING':
    newState = { ...previousState }
    newState.isLoading = true
    return newState

  case 'STOP_LOADING':
    newState = { ...previousState }
    newState.isLoading = false
    return newState

  case 'LOADING_SUCCESS':
    newState = { ...previousState }
    newState.isError = false
    return newState

  case 'LOADING_FAILED':
    newState = { ...previousState }
    newState.isError = true
    return newState

  case 'TOGGLE_SORT':
    newState = { ...previousState }
    newState.isDESC = !newState.isDESC
    return newState

  case 'FETCHED_ALL':
    newState = { ...previousState }
    newState.isFetchedAll = true
    return newState

  default:
    return previousState
  }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialDataState)
  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
