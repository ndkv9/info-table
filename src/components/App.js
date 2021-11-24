import React, { useEffect } from 'react'
import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Button, Typography } from '@material-ui/core'
import InfoTable from './InfoTable'
import useData from '../hooks/useData'

export const App = () => {
  const { projects, dispatch } = useData()
  const { getProjectsDiff } = api

  const fetchProjectsData = async () => {
    try {
      const result = await getProjectsDiff()
      dispatch({ type: 'LOAD_PROJECTS_DATA', payload: result.data })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProjectsData()
  }, [getProjectsDiff])

  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <Typography>hello world</Typography>

        <InfoTable data={projects.data} />

        <Button
          variant='contained'
          color='primary'
          data-testid='loading-btn'
          onClick={fetchProjectsData}
        >
          Load more
        </Button>
      </Box>
    </Container>
  )
}

export default App
