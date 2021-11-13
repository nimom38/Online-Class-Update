import React from 'react'
import Minicards from './Minicards'
import { Grid } from '@material-ui/core'

export default function Announcementhome() {
  window.scrollTo(0, 0)
  return (
    <Grid container spacing={3}>
      <Grid item lg={7} xs={12}>
        <Minicards
          title={'Date of exam has been published!!!'}
          time={'August 12th, 2021 - 10:00pm'}
          details={
            'The date of final examination has been published. Exam will start from September 1st. Everyone take preparation. Come to Chattogram as soon as possible'
          }
        />
      </Grid>
      <Grid item lg={7} xs={12}>
        <Minicards
          title={'Exam form fillup'}
          time={'August 11th, 2021 - 6:00pm'}
          details={
            'Everyone collect your forms from your respective halls. Total fee is 1100 TK.'
          }
        />
      </Grid>

      <Grid item lg={7} xs={12}>
        <Minicards
          title={'Thesis proposal date postponed'}
          time={'August 7th, 2021 - 3:28am'}
          details={
            'It is to be informed that the thesis proposal submission that was scheduled to be held tomorrow has been postponed. The updated date of submission will be announced later.'
          }
        />
      </Grid>

      <Grid item lg={7} xs={12}>
        <Minicards
          title={'NOTICE'}
          time={'March 3rd, 2021 - 1:20pm'}
          details={
            'This is to inform you all that the classes of next semester will be started on 10th March 2021. The 7th semester final exams will be held after Eid vacation. The vacation during Eid will be considered as PL.'
          }
        />
      </Grid>

      <Grid item lg={7} xs={12}>
        <Minicards
          title={'General'}
          time={'February 11th, 2021 - 8:00am'}
          details={
            'Before joining the online class please make sure you provide your ID along with your name.'
          }
        />
      </Grid>

      <Grid item lg={7} xs={12}>
        <Minicards
          title={'Barbeque Party'}
          time={'January 5th, 2021 - 6:00am'}
          details={
            'Guys, now that the classes are going to start let us do a barbeque party today to pump ourselves up before the classes start!! Meet at the campus at 4pm!'
          }
        />
      </Grid>
    </Grid>
  )
}
