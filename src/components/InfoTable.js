import React, { useCallback, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import SortingButton from './SortingButton'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import LoadingCircular from './LoadingCircular'
import Notification from './Notification'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const InfoTable = ({ getData }) => {
  const classes = useStyles()
  const [isDESC, setIsDESC] = useState(true)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [notification, setNotification] = useState(null)
  const [isFetchedAll, setIsFetchedAll] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      setNotification(null)
      const result = await getData()
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
  }, [getData])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // helper fn to transform timestamp to date value
  const getDateValue = timestamp => {
    const partsOfDate = new Date(timestamp).toLocaleDateString().split('/')
    const year = partsOfDate.pop()
    partsOfDate.unshift(year)
    const date = partsOfDate.join('-')

    return date
  }

  // helper fn to sort data by date
  const sortByDateValue = data => {
    if (isDESC) {
      return data.sort((current, next) => next.timestamp - current.timestamp)
    } else {
      return data.sort((current, next) => current.timestamp - next.timestamp)
    }
  }

  const rows = sortByDateValue(data).map(({ id, timestamp, diff }) => ({
    id,
    timestamp: getDateValue(timestamp),
    oldValue: diff[0].oldValue,
    newValue: diff[0].newValue,
  }))

  return (
    <Box>
      <h2>Im a Header</h2>

      <TableContainer component={Paper}>
        <Table className={classes.table} arcenterbel='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>
                Date
                <SortingButton isDESC={isDESC} setIsDESC={setIsDESC} />
              </TableCell>
              <TableCell align='center'>User ID</TableCell>
              <TableCell align='center'>Old Value</TableCell>
              <TableCell align='center'>New Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell align='center'>{row.timestamp}</TableCell>
                <TableCell align='center'>{row.id}</TableCell>
                <TableCell align='center'>{row.oldValue}</TableCell>
                <TableCell align='center'>{row.newValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Notification notification={notification} />

      {isLoading ? (
        <LoadingCircular />
      ) : isFetchedAll ? null : (
        <Button variant='contained' color='primary' onClick={fetchData}>
          {isError ? 'Retry' : 'Load more'}
        </Button>
      )}
    </Box>
  )
}

InfoTable.propTypes = {
  getData: PropTypes.func.isRequired,
}

export default InfoTable
