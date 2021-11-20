import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import InfoTable from './InfoTable'

export const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.getUsersDiff()
        setData(prev => [...prev, ...result.data])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  console.log('data', data)

  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <Typography>Your app should show up here.</Typography>
        {/* Just a dummy fetcher to show how the api should be used, this should be removed */}
        <Button
          variant='contained'
          color='primary'
          onClick={() => console.log('clicked!')}
        >
          Load more
        </Button>
        <InfoTable data={data} />
      </Box>
    </Container>
  )
}

export default App
