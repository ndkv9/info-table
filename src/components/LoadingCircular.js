import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Box } from '@material-ui/core'

const LoadingCircular = () => {
  return (
    <Box data-testid='loading-circular' textAlign='center'>
      <CircularProgress />
    </Box>
  )
}

export default LoadingCircular
