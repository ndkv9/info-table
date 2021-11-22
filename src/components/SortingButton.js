import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

const SortingButton = () => {
  return (
    <IconButton aria-label='delete' size='small'>
      <ArrowDownwardIcon fontSize='inherit' />
    </IconButton>
  )
}

export default SortingButton
