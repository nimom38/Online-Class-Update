import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Minicards from './Minicards'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
})

export default function Announcementhome() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Minicards
          title={'Exam hobe!!!'}
          time={'August 12th, 2021 - 6:00pm'}
          details={
            'Next month teke exam shuru hobe. Everyone take preparation. Come to Chattogram as soon as possible'
          }
        />
        <Minicards
          title={'Exam form fillup'}
          time={'August 11th, 2021 - 6:00pm'}
          details={
            'Everyone collect your forms from your respective halls. Total fee is 1100 TK.'
          }
        />
        <Minicards
          title={'Exam postponed'}
          time={'August 10th, 2021 - 6:00pm'}
          details={'Exam has been postponed. Shobai jar jar bari chole jao.'}
        />
      </CardContent>
    </Card>
  )
}
