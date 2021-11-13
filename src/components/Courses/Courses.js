import { Grid } from '@material-ui/core'
import React from 'react'
import Minicard from './Minicard'

const Courses = () => {
  window.scrollTo(0, 0)
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
            Course='Computer Graphics'
            Code='CSE 7XX'
            Teacher='Rashed Mostafa'
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Minicard
            Course='Simulation and Modelling'
            Code='CSE 7XX'
            Teacher='Anwarul Azim'
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Courses
