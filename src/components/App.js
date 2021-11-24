import React from 'react'
import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import InfoTable from './InfoTable'
import { DataProvider } from '../context/DataContext'

export const App = () => {
  const { getProjectsDiff, getUsersDiff } = api

  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <Typography>hello world</Typography>

        <DataProvider>
          <InfoTable getData={getUsersDiff} />
        </DataProvider>

        <DataProvider>
          <InfoTable getData={getProjectsDiff} />
        </DataProvider>
      </Box>
    </Container>
  )
}

export default App
