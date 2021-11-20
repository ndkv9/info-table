import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import InfoTable from './InfoTable'
import { Typography } from '@material-ui/core'

export const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])
  console.log('data', data)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const result = await api.getUsersDiff()
      setData(prev => [...prev, ...result.data])
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
  }

  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <InfoTable data={data} />

        {isLoading ? (
          <Typography>Loading..</Typography>
        ) : (
          <Button variant='contained' color='primary' onClick={fetchData}>
            Load more
          </Button>
        )}
      </Box>
    </Container>
  )
}

export default App
