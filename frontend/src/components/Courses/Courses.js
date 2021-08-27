import { Grid } from '@material-ui/core'
import React from 'react'
import Minicard from './Minicard'

const Courses = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <Minicard
            Course='Artificial Intelligence'
            Code='CSE 7XX'
            Teacher='Shahadat Hossain'
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Minicard Course='Compiler' Code='CSE 7XX' Teacher='Rokon Faruquee' />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Minicard
            Course='Information Security'
            Code='CSE 7XX'
            Teacher='Sanaullah Chowdhury'
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Minicard
            Course='Artificial Intelligence'
            Code='CSE 7XX'
            Teacher='Shahadat Hossain'
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Minicard
            Course='Artificial Intelligence'
            Code='CSE 7XX'
            Teacher='Shahadat Hossain'
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Courses
