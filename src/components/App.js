import React from 'react'
import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import InfoTable from './InfoTable'

export const App = () => {
  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <h2>Im a Header</h2>

        <InfoTable getData={api.getUsersDiff} />

        <InfoTable getData={api.getProjectsDiff} />
      </Box>
    </Container>
  )
}

export default App
