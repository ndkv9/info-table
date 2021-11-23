import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const Notification = ({ notification, isError }) => {
  if (!notification) {
    return null
  }

  return (
    <Typography
      data-testid='notification'
      variant='body1'
      color={isError ? 'error' : 'primary'}
    >
      {notification}
    </Typography>
  )
}

Notification.propTypes = {
  notification: PropTypes.string,
  isError: PropTypes.bool.isRequired,
}

export default Notification
