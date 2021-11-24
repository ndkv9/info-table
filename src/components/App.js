import React, { useEffect } from 'react'
import api from '../lib/api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useFetch from '../hooks/useFetch'
import useData from '../hooks/useData'
import InfoTable from './InfoTable'
import LoadingCircular from './LoadingCircular'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  circular: {
    margin: '10rem auto',
  },
})

export const App = () => {
  const { getProjectsDiff, getUsersDiff } = api
  const { projects, users, toggleSort } = useData()
  const fetchProjectsData = useFetch(getProjectsDiff, 'projects')
  const fetchUsersData = useFetch(getUsersDiff, 'users')
  const classes = useStyles()

  // initialize data for the first load
  useEffect(() => {
    fetchUsersData()
    fetchProjectsData()
  }, [fetchProjectsData, fetchUsersData])

  return (
    <Container className='app' fixed>
      {projects.data.length === 0 && users.data.length === 0 && (
        <Box className={classes.circular}>
          <Typography variant='h5' align='center'>
            Loading..
          </Typography>

          <LoadingCircular />
        </Box>
      )}

      {projects.data.length !== 0 && users.data.length !== 0 && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </Container>
  )
}

export default App
