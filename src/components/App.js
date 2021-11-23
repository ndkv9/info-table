import React from 'react'
import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import InfoTable from './InfoTable'
import Typography from '@material-ui/core/Typography'

export const App = () => {
  const { getUsersDiff, getProjectsDiff } = api
  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <React.Fragment>
          <Typography variant='h4'>Users History</Typography>
          <InfoTable getData={getUsersDiff} />
        </React.Fragment>

        <React.Fragment>
          <Typography variant='h4'>Projects History</Typography>
          <InfoTable getData={getProjectsDiff} />
        </React.Fragment>
      </Box>
    </Container>
  )
}

export default App
