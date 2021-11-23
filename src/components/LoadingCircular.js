import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

const LoadingCircular = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} data-testid='loading-circular'>
      <CircularProgress />
    </div>
  )
}

export default LoadingCircular
