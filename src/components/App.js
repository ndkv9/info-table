import React, { useEffect, useCallback } from 'react'
import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import InfoTable from './InfoTable'
import useData from '../hooks/useData'

export const App = () => {
  const { projects, dispatch } = useData()
  const { getProjectsDiff } = api

  const fetchProjectsData = useCallback(async () => {
    try {
      dispatch({ type: 'LOADING' })
      const result = await getProjectsDiff()
      dispatch({ type: 'LOADING_SUCCESS' })
      dispatch({ type: 'LOAD_PROJECTS_DATA', payload: result.data })
      if (result.offset + result.limit >= result.total) {
        dispatch({ type: 'FETCHED_ALL' })
      }
    } catch (error) {
      dispatch({ type: 'LOADING_FAILED' })
    }

    dispatch({ type: 'STOP_LOADING' })
  }, [dispatch, getProjectsDiff])

  useEffect(() => {
    fetchProjectsData()
  }, [fetchProjectsData])

  console.log('projects', projects)
  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <Typography>hello world</Typography>

        <InfoTable dataType={projects} dispatch={dispatch} />
      </Box>
    </Container>
  )
}

export default App
