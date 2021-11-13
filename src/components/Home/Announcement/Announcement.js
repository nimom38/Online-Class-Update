import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Minicards from './Minicards'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  },
})

export default function Announcementhome() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Minicards
          title={'Date of exam has been published!!!'}
          time={'August 12th, 2021 - 10:00pm'}
          details={
            'The date of final examination has been published. Exam will start from September 1st. Everyone take preparation. Come to Chattogram as soon as possible'
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
          title={'Thesis proposal date postponed'}
          time={'August 7th, 2021 - 3:28am'}
          details={
            'It is to be informed that the thesis proposal submission that was scheduled to be held tomorrow has been postponed. The updated date of submission will be announced later.'
          }
        />
      </CardContent>
    </Card>
  )
}
