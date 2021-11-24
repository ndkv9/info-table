import React from 'react'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import PropTypes from 'prop-types'

const SortingButton = ({ isDESC, toggleSort, children }) => {
  return (
    <TableSortLabel
      data-testid='sorting-btn'
      active={true}
      direction={isDESC ? 'desc' : 'asc'}
      onClick={toggleSort}
    >
      {children}
    </TableSortLabel>
  )
}

SortingButton.propTypes = {
  isDESC: PropTypes.bool.isRequired,
  toggleSort: PropTypes.func.isRequired,
}

export default SortingButton
