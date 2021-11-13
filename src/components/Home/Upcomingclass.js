import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 265,
    display: 'inline-block',
    marginRight: '10px',
    boxShadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  },
})

export default function Upcomingclass({ Course, Time }) {
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
          Starting time: {Time}
        </Typography>
      </CardContent>
    </Card>
  )
}
