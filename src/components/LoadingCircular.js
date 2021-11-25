import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'

const LoadingCircular = () => {
  return (
    <Box
      data-testid='loading-circular'
      data-cy='progress-circular'
      textAlign='center'
    >
      <CircularProgress />
    </Box>
  )
}

export default LoadingCircular
