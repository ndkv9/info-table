import React, { useEffect } from 'react'
import api from '../lib/api'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import InfoTable from './InfoTable'

export const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.getUsersDiff()
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <Typography>Your app should show up here.</Typography>
        {/* Just a dummy fetcher to show how the api should be used, this should be removed */}
        <Button variant='contained' color='primary'>
          Test data fetch
        </Button>
        <InfoTable />
      </Box>
    </Container>
  )
}

export default App
