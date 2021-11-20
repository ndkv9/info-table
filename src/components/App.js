import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import InfoTable from './InfoTable'

export const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  console.log('data', data)

  const fetchData = async () => {
    try {
      const result = await api.getUsersDiff()
      setData(prev => [...prev, ...result.data])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <InfoTable data={data} />

        <Button variant='contained' color='primary' onClick={fetchData}>
          Load more
        </Button>
      </Box>
    </Container>
  )
}

export default App
