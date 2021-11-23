import React from 'react'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import PropTypes from 'prop-types'

const SortingButton = ({ isDESC, setIsDESC }) => {
  return (
    <TableSortLabel
      active={true}
      direction={isDESC ? 'desc' : 'asc'}
      onClick={() => setIsDESC(!isDESC)}
    />
  )
}

SortingButton.propTypes = {
  isDESC: PropTypes.bool.isRequired,
  setIsDESC: PropTypes.func.isRequired,
}

export default SortingButton
