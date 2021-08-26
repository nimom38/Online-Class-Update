import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 265,
  },
})

export default function Upcomingtasks() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='body2' component='p'>
          1. Compiler - Due
        </Typography>
        <br />
        <Typography variant='body2' component='p'>
          2. AI - Done
        </Typography>
      </CardContent>
    </Card>
  )
}
