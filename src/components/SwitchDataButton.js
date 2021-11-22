import React from 'react'
import Button from '@material-ui/core/Button'
import DescriptionIcon from '@material-ui/icons/Description'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const SwitchDataButton = ({ isUserData, setIsUserData }) => {
  return (
    <Button
      variant='contained'
      color='primary'
      startIcon={isUserData ? <DescriptionIcon /> : <AccountCircleIcon />}
      onClick={() => setIsUserData(!isUserData)}
    >
      {isUserData ? 'Project History' : 'User History'}
    </Button>
  )
}

export default SwitchDataButton