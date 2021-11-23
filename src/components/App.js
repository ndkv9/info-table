import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import InfoTable from './InfoTable'
import LoadingCircular from './LoadingCircular'
import Notification from './Notification'
import SwitchDataButton from './SwitchDataButton'

export const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [notification, setNotification] = useState(null)
  const [isFetchedAll, setIsFetchedAll] = useState(false)
  const [isUserData, setIsUserData] = useState(true)

  useEffect(() => {
    setData([])
    fetchData()
  }, [isUserData])

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setNotification(null)
      const result = isUserData
        ? await api.getUsersDiff()
        : await api.getProjectsDiff()
      setIsError(false)
      setData(prev => [...prev, ...result.data])
      if (result.offset + result.limit >= result.total) {
        setIsFetchedAll(true)
        setNotification('All data is fetched!')
      }
    } catch (error) {
      setIsError(true)
      setNotification('We had problems fetching your data. Please try again!')
    }

    setIsLoading(false)
  }

  return (
    <Container className='app' fixed>
      <Box data-testid='app-box' m={2}>
        <h2>Im a Header</h2>

        {data.length !== 0 && (
          <SwitchDataButton
            isUserData={isUserData}
            setIsUserData={setIsUserData}
          />
        )}

        {data.length !== 0 && <InfoTable data={data} />}

        <Notification notification={notification} />

        {isLoading ? (
          <LoadingCircular />
        ) : isFetchedAll ? null : (
          <Button variant='contained' color='primary' onClick={fetchData}>
            {isError ? 'Retry' : 'Load more'}
          </Button>
        )}
      </Box>
    </Container>
  )
}

export default App
