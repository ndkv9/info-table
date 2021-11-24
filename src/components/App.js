import React from 'react'
import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import InfoTable from './InfoTable'
import { Typography } from '@material-ui/core'
import { DataProvider } from '../context/DataContext'

export const App = () => {
  const { getProjectsDiff, getUsersDiff } = api

  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <DataProvider>
          <Typography variant='h4' align='center'>
            Users History
          </Typography>
          <InfoTable getData={getUsersDiff} />
        </DataProvider>

        <DataProvider>
          <Typography variant='h4' align='center'>
            Projects History
          </Typography>
          <InfoTable getData={getProjectsDiff} />
        </DataProvider>
      </Box>
    </Container>
  )
}

export default App
