import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Button, CardActions, useTheme } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: 'inline-block',
    boxShadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  },
})

export default function Ongoingclass({ Course, Teacher }) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant='h5'
          component='h2'
          style={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: '5px',
            padding: '5px',
            display: 'inline-block',
            color: 'white',
          }}
        >
          {Course}
        </Typography>
        <br />
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
