import React, { useEffect } from 'react'
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
import useFetch from '../hooks/useFetch'
import useSort from '../hooks/useSort'
import helper from '../utils/helper'

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

const InfoTable = ({ getAPI }) => {
  const classes = useStyles()

  const { data, isDESC, isLoading, isError, isFetchedAll, toggleSort } =
    useData()

  // helper to sort date value in reverse chronological order (newest first) as default
  const sortByDateValue = useSort(isDESC)
  const fetchData = useFetch(getAPI)

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const rows = sortByDateValue(data).map(({ id, timestamp, diff }) => ({
    id,
    timestamp: helper.getDateValue(timestamp),
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
                  <SortingButton isDESC={isDESC} toggleSort={toggleSort}>
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
  getAPI: PropTypes.func.isRequired,
}

export default InfoTable
