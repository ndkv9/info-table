import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const InfoTable = ({ data }) => {
  const classes = useStyles()

  const rows = data.map(({ id, timestamp, diff }) => ({
    id,
    timestamp,
    oldValue: diff[0].oldValue,
    newValue: diff[0].newValue,
  }))

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} arcenterbel='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Date</TableCell>
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
  )
}

InfoTable.propTypes = {
  data: PropTypes.array.isRequired,
}

export default InfoTable
