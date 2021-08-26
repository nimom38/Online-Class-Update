import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 265,
    display: 'inline-block',
    marginRight: '10px',
  },
})

export default function Upcomingclass({ Course, Time }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {Course}
        </Typography>
        <br />
        <Typography variant='body2' component='p'>
          T: {Time}
        </Typography>
      </CardContent>
    </Card>
  )
}
