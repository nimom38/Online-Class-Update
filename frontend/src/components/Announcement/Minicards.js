import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 25,
    minWidth: 275,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    paddingTop: 17,
    paddingLeft: 17,
    paddingRight: 17,
    marginBottom: 10,
  },
}))

export default function Minicards({ title, time, details }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography variant='h5' component='h2'>
        {title}
      </Typography>
      <Typography variant='caption' gutterBottom>
        {time}
      </Typography>
      <br />
      <br />
      <Typography paragraph>{details}</Typography>
    </Card>
  )
}
