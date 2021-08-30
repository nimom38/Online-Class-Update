import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 15,
    minWidth: 275,
    paddingTop: 17,
    paddingLeft: 17,
    paddingRight: 17,
    marginBottom: 10,
  },
}))

export default function Minicards({ title, time, details }) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Card className={classes.root}>
      <div
        style={{
          backgroundColor: theme.palette.primary.main,
          display: 'inline-block',
          padding: '5px',
          color: 'white',
          borderRadius: '12px',
        }}
      >
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography variant='caption' gutterBottom>
          {time}
        </Typography>
      </div>

      <br />
      <br />
      <Typography paragraph>{details}</Typography>
    </Card>
  )
}
