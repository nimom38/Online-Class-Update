import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Button, CardActions } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: 'inline-block',
  },
})

export default function Ongoingclass({ Course, Teacher }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {Course}
        </Typography>
        <br />
        <Typography variant='body2' component='p'>
          {Teacher}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' color='primary'>
          View work Today
        </Button>
        <Button variant='outlined' color='primary'>
          Join Link
        </Button>
      </CardActions>
    </Card>
  )
}
