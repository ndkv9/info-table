import React, { createContext, useReducer } from 'react'

// Combine betwween useReducer and useContext to keep the state management logic separate from the components
// Each table will have a set of states that depends on it's action, so they need to manage them separately
// The initialDataState plays as a global store for two table's states

export const DataContext = createContext()

const initialDataState = {
  users: {
    data: [],
    isLoading: false,
    isDESC: true,
    isError: false,
    isFetchedAll: false,
  },
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
  case 'LOAD_DATA':
    newState = { ...previousState }
    newState[action.apiType].data = newState[action.apiType].data.concat(
      action.payload,
    )
    return newState

  case 'LOADING':
    newState = { ...previousState }
    newState[action.apiType].isLoading = true
    return newState

  case 'STOP_LOADING':
    newState = { ...previousState }
    newState[action.apiType].isLoading = false
    return newState
  case 'SET_ERROR_TO_FALSE':
    newState = { ...previousState }
    newState[action.apiType].isError = false
    return newState
  case 'SET_ERROR_TO_TRUE':
    newState = { ...previousState }
    newState[action.apiType].isError = true
    return newState
  case 'TOGGLE_SORT':
    newState = { ...previousState }
    newState[action.apiType].isDESC = !newState[action.apiType].isDESC
    return newState
  case 'FETCHED_ALL':
    newState = { ...previousState }
    newState[action.apiType].isFetchedAll = true
    return newState
  default:
    return previousState
  }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialDataState)

  // toggleSort helper
  const toggleSort = api => {
    dispatch({ type: 'TOGGLE_SORT', apiType: api })
  }

  return (
    <DataContext.Provider value={{ ...state, dispatch, toggleSort }}>
      {children}
    </DataContext.Provider>
  )
}
