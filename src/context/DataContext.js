import React from 'react'
import { createContext, useReducer } from 'react'

export const DataContext = createContext()

const initialDataState = {
  projects: {
    data: [],
    isLoading: false,
    isDESC: true,
    isError: false,
    isFetchedAll: false,
  },
}

const dataReducer = (previousState, action) => {
  let newState
  switch (action.type) {
  case 'LOAD_PROJECTS_DATA':
    newState = { ...previousState }
    newState.projects.data = newState.projects.data.concat(action.payload)
    return newState

  case 'LOADING':
    newState = { ...previousState }
    newState.projects.isLoading = true
    return newState

  case 'STOP_LOADING':
    newState = { ...previousState }
    newState.projects.isLoading = false
    return newState

  case 'LOADING_SUCCESS':
    newState = { ...previousState }
    newState.projects.isError = false
    return newState

  case 'LOADING_FAILED':
    newState = { ...previousState }
    newState.projects.isError = true
    return newState

  case 'TOGGLE_SORT':
    newState = { ...previousState }
    newState.projects.isDESC = !newState.projects.isDESC
    return newState

  case 'FETCHED_ALL':
    newState = { ...previousState }
    newState.projects.isFetchedAll = true
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
