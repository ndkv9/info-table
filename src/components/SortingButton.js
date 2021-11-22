import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

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

export default SortingButton
