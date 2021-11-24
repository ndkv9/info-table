import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { DataProvider } from './context/DataContext'

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById('root'),
)
