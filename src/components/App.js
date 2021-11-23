import React from 'react'
import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import InfoTable from './InfoTable'

export const App = () => {
  const { getUsersDiff, getProjectsDiff } = api
  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <InfoTable getData={getUsersDiff} />

        <InfoTable getData={getProjectsDiff} />
      </Box>
    </Container>
  )
}

export default App
