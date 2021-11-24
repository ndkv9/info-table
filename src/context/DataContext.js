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
  switch (action.type) {
  case 'LOAD_DATA':
    return {
      ...previousState,
      data: [...previousState.data, ...action.payload],
    }

  case 'LOADING':
    return { ...previousState, isLoading: true }

  case 'STOP_LOADING':
    return { ...previousState, isLoading: false }

  case 'LOADING_SUCCESS':
    return { ...previousState, isError: false }

  case 'LOADING_FAILED':
    return { ...previousState, isError: true }

  case 'TOGGLE_SORT':
    return { ...previousState, isDESC: !previousState.isDESC }

  case 'FETCHED_ALL':
    return { ...previousState, isFetchedAll: true }

  default:
    return previousState
  }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialDataState)

  const toggleSort = () => {
    dispatch({ type: 'TOGGLE_SORT' })
  }

  return (
    <DataContext.Provider value={{ ...state, dispatch, toggleSort }}>
      {children}
    </DataContext.Provider>
  )
}
