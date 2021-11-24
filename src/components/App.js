import React, { useEffect } from 'react'
import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import useFetch from '../hooks/useFetch'
import useData from '../hooks/useData'
import InfoTable from './InfoTable'

export const App = () => {
  const { getProjectsDiff, getUsersDiff } = api
  const { projects, users, toggleSort } = useData()
  const fetchProjectsData = useFetch(getProjectsDiff, 'projects')
  const fetchUsersData = useFetch(getUsersDiff, 'users')

  // initialize data for the first load
  useEffect(() => {
    fetchUsersData()
    fetchProjectsData()
  }, [fetchProjectsData, fetchUsersData])

  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <InfoTable
          name={'Users'}
          api={users}
          fetchData={fetchUsersData}
          toggleSort={() => toggleSort('users')}
        />

        <InfoTable
          name={'Projects'}
          api={projects}
          fetchData={fetchProjectsData}
          toggleSort={() => toggleSort('projects')}
        />
      </Box>
    </Container>
  )
}

export default App
