import React from 'react'
import Minicards from './Minicards'
import { Grid } from '@material-ui/core'

export default function Announcementhome() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={7} xs={12}>
        <Minicards
          title={'Exam hobe!!!'}
          time={'August 12th, 2021 - 6:00pm'}
          details={
            'Next month teke exam shuru hobe. Everyone take preparation. Come to Chattogram as soon as possible'
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
          title={'Exam postponed'}
          time={'August 10th, 2021 - 6:00pm'}
          details={'Exam has been postponed. Shobai jar jar bari chole jao.'}
        />
      </Grid>

      <Grid item lg={7} xs={12}>
        <Minicards
          title={'Exam postponed'}
          time={'August 10th, 2021 - 6:00pm'}
          details={'Exam has been postponed. Shobai jar jar bari chole jao.'}
        />
      </Grid>

      <Grid item lg={7} xs={12}>
        <Minicards
          title={'Exam postponed'}
          time={'August 10th, 2021 - 6:00pm'}
          details={'Exam has been postponed. Shobai jar jar bari chole jao.'}
        />
      </Grid>

      <Grid item lg={7} xs={12}>
        <Minicards
          title={'Exam postponed'}
          time={'August 10th, 2021 - 6:00pm'}
          details={'Exam has been postponed. Shobai jar jar bari chole jao.'}
        />
      </Grid>
    </Grid>
  )
}
