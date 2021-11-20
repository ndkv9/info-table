import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein }
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24),
//   createData('Ice cream sandwich', 237, 9.0, 37),
//   createData('Eclair', 262, 16.0, 24),
//   createData('Cupcake', 305, 3.7, 67),
//   createData('Gingerbread', 356, 16.0, 49),
// ]

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

export default InfoTable
