import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Calendar from './Calendar'
import Announcementhome from './Announcementhome/Announcementhome'
import Attendance from './Attendance'
import Ongoingclass from './Ongoingclass'
import Upcomingclass from './Upcomingclass'
import Upcomingexams from './Upcomingexams'
import Upcomingtasks from './Upcomingtasks'

const Home = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={7} xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Attendance />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h5'>UPCOMING CLASSES TODAY</Typography>
              <Upcomingclass Course='Compiler' Time='9:00am' />
              <Upcomingclass Course='AI' Time='10:00am' />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h5'>ONGOING CLASS</Typography>
              <Ongoingclass
                Course='Theory of Computation, 711'
                Teacher='Rokon Faruquee'
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item lg={6} xs={12}>
                  <Typography variant='h5'>UPCOMING TASKS</Typography>
                  <Upcomingtasks />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Typography variant='h5'>UPCOMING EXAMS</Typography>
                  <Upcomingexams />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={5} xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Calendar />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5'>ANNOUNCEMENT</Typography>
              <Announcementhome />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
