import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 255,
    boxShadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function Minicard({ Course, Code, Teacher }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {Course}
        </Typography>
        <br />
        <Typography variant='body2' component='p'>
          {Code}
        </Typography>
        <Typography variant='body2' component='p'>
          {Teacher}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' color='primary'>
          Classroom
        </Button>
        <Button variant='outlined' color='primary'>
          Drive
        </Button>
        <Button variant='outlined' color='primary'>
          Zoom
        </Button>
      </CardActions>
    </Card>
  )
}
