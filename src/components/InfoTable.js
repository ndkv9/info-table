import React, { useCallback, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import SortingButton from './SortingButton'
import Button from '@material-ui/core/Button'
import LoadingCircular from './LoadingCircular'
import Notification from './Notification'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import useData from '../hooks/useData'

const useStyles = makeStyles({
  root: {
    marginBottom: '1rem',
  },
  table: {
    minWidth: 650,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

const InfoTable = ({ getData }) => {
  const classes = useStyles()

  const { data, isDESC, isLoading, isError, isFetchedAll, dispatch } = useData()

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: 'LOADING' })
      const result = await getData()
      dispatch({ type: 'LOADING_SUCCESS' })
      dispatch({ type: 'LOAD_DATA', payload: result.data })
      if (result.offset + result.limit >= result.total) {
        dispatch({ type: 'FETCHED_ALL' })
      }
    } catch (error) {
      dispatch({ type: 'LOADING_FAILED' })
    }

    dispatch({ type: 'STOP_LOADING' })
  }, [dispatch, getData])

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

  //helper fn to sort data by date
  const sortByDateValue = useCallback(
    data => {
      if (isDESC) {
        return data.sort((current, next) => next.timestamp - current.timestamp)
      } else {
        return data.sort((current, next) => current.timestamp - next.timestamp)
      }
    },
    [isDESC],
  )

  const rows = sortByDateValue(data).map(({ id, timestamp, diff }) => ({
    id,
    timestamp: getDateValue(timestamp),
    oldValue: diff[0].oldValue,
    newValue: diff[0].newValue,
  }))

  return (
    <Box data-testid='info-table' boxShadow={0} m={2} p={2}>
      {data.length !== 0 && (
        <TableContainer className={classes.root} component={Paper}>
          <Table className={classes.table} arcenterbel='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left' width={100}>
                  <SortingButton
                    isDESC={isDESC}
                    toggleSort={() => dispatch({ type: 'TOGGLE_SORT' })}
                  >
                    <Typography className={classes.header}> Date</Typography>
                  </SortingButton>
                </TableCell>
                <TableCell align='left' width={400}>
                  <Typography className={classes.header}>User ID</Typography>
                </TableCell>
                <TableCell align='left' width={200}>
                  <Typography className={classes.header}>Old Value</Typography>
                </TableCell>
                <TableCell align='left' width={200}>
                  <Typography className={classes.header}>New Value</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell align='left'>
                    <Typography>{row.timestamp}</Typography>
                  </TableCell>
                  <TableCell align='left'>
                    <Typography>{row.id}</Typography>
                  </TableCell>
                  <TableCell align='left'>
                    <Typography>{row.oldValue}</Typography>
                  </TableCell>
                  <TableCell align='left'>
                    <Typography>{row.newValue}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Notification isFetchedAll={isFetchedAll} isError={isError} />

      {isLoading ? (
        <LoadingCircular />
      ) : isFetchedAll ? null : (
        <Box textAlign='center' marginBottom='2rem'>
          <Button
            variant='contained'
            color='primary'
            data-testid='loading-btn'
            onClick={fetchData}
          >
            {isError ? 'Retry' : 'Load more'}
          </Button>
        </Box>
      )}
    </Box>
  )
}

InfoTable.propTypes = {
  getData: PropTypes.func.isRequired,
}

export default InfoTable
