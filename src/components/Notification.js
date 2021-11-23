import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const Notification = ({ notification }) => {
  if (!notification) {
    return null
  }

  return (
    <Typography data-testid='notification' variant='body1'>
      {notification}
    </Typography>
  )
}

Notification.propTypes = {
  notification: PropTypes.string,
}

export default Notification
