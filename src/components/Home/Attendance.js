import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CircularProgressWithLabel from './CircularProgressWithLabel'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // border: '1px solid',
    // boxShadow:
    //   'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    boxShadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    // boxShadow:
    //   'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
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

export default function Attendance() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Hey Guest, keep it going!
        </Typography>
        <br />
        <Grid container spacing={3}>
          <Grid
            item
            xs={6}
            container
            justifyContent='center'
            alignItems='center'
          >
            <CircularProgressWithLabel value={90} size={'25vmin'} />
          </Grid>
          <Grid item xs={6} container alignItems='center'>
            <Grid item xs={12}>
              <Typography
                variant='caption'
                component='h1'
                style={{ fontSize: '15px' }}
              >
                50 Classes held
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant='caption'
                component='h1'
                style={{ fontSize: '15px' }}
              >
                45 Joined
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Attendance counts!
        </Typography>
      </CardContent>
    </Card>
  )
}
