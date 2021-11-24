import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const Notification = ({ isError, isFetchedAll }) => {
  if (!(isError || isFetchedAll)) {
    return null
  }

  return (
    <Typography
      data-testid='notification'
      variant='body1'
      gutterBottom
      align='center'
      color={isError ? 'error' : 'secondary'}
    >
      {isError
        ? 'We had problems fetching your data. Please try again!'
        : 'Fetched all data!'}
    </Typography>
  )
}

Notification.propTypes = {
  isFetchedAll: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
}

export default Notification
