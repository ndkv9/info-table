import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ notification }) => {
  if (!notification) {
    return null
  }

  return <div data-testid='notification'>{notification}</div>
}

Notification.propTypes = {
  notification: PropTypes.string,
}

export default Notification
