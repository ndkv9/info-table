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
        <React.Fragment>
          <h2>Users History</h2>
          <InfoTable getData={getUsersDiff} />
        </React.Fragment>

        <React.Fragment>
          <h2>Projects History</h2>
          <InfoTable getData={getProjectsDiff} />
        </React.Fragment>
      </Box>
    </Container>
  )
}

export default App
