import React from 'react'
import { createContext, useReducer } from 'react'

export const DataContext = createContext()

const initialDataState = {
  projects: {
    data: [],
  },
}

const dataReducer = (previousState, action) => {
  let newState
  switch (action.type) {
  case 'LOAD_PROJECTS_DATA':
    newState = { ...previousState }
    newState.projects.data = newState.projects.data.concat(action.payload)
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
