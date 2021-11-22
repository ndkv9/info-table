import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import PropTypes from 'prop-types'

const SortingButton = ({ isDESC, setIsDESC }) => {
  return (
    <IconButton
      aria-label='delete'
      size='small'
      onClick={() => setIsDESC(!isDESC)}
    >
      {isDESC ? (
        <ArrowDropDownIcon fontSize='inherit' />
      ) : (
        <ArrowDropUpIcon fontSize='inherit' />
      )}
    </IconButton>
  )
}

SortingButton.propTypes = {
  isDESC: PropTypes.bool.isRequired,
  setIsDESC: PropTypes.func.isRequired,
}

export default SortingButton
