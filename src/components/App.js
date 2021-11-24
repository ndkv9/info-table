import React from 'react'
//import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'

export const App = () => {
  //const { getUsersDiff } = api
  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <Typography>hello world</Typography>
      </Box>
    </Container>
  )
}

export default App
