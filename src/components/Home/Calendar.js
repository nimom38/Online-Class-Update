import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'
import Calendaro from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    boxShadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    display: 'none',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}))

export default function Upcomingtasks() {
  const classes = useStyles()
  const [time, setTime] = useState(moment().format('h:mm:ss a'))

  setInterval(() => setTime(moment().format('h:mm:ss a')), 1000)

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
          align='center'
        >
          {time}
        </Typography>
        <div style={{ display: 'inline-block' }}>
          <Calendaro />
        </div>
      </CardContent>
    </Card>
  )
}
