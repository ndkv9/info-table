import React, { useEffect } from 'react'
import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import useData from '../hooks/useData'

export const App = () => {
  const { projects, dispatch } = useData()
  const { getProjectsDiff } = api

  const fetchData = async getData => {
    try {
      const result = await getData()
      dispatch({ type: 'LOAD_PROJECTS_DATA', payload: result.data })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData(getProjectsDiff)
  }, [getProjectsDiff])

  console.log('data', projects.data)
  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <Typography>hello world</Typography>
      </Box>
    </Container>
  )
}

export default App
