import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { Divider } from '@material-ui/core'

export default function Upcoming() {
  const theme = useTheme()
  // window.scrollTo(0, 0)
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Typography variant='p' component='h1'>
          TODAY'S EXAMS
        </Typography>
        <Card
          style={{
            minWidth: 275,
            boxShadow:
              'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}
        >
          <CardContent>
            <Typography
              variant='h5'
              component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Artificial Intelligence - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              A class test will be held on model based agents. Questions will be
              of conceptual type. Some short notes telling us to explain
              different examples of model based agents and why they are
              considered model based agents may come in the test. Moreover, some
              questions from the topic of machine learning like - artificial
              neural networks, CNN, DNN, statistical classifiers may come.
            </Typography>
            <br />
            <Typography
              variant='p'
              // component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Starting time: August 31st, 2021 - 9:00am
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card
          style={{
            minWidth: 275,
            boxShadow:
              'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}
        >
          <CardContent>
            <Typography
              variant='h5'
              component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Compiler - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              Syllabus of the exam is chapter 2, 3, 4. Questions asking to find
              out the FIRST and FOLLOW of a grammar may come in the test. We may
              be asked to find whether or not a grammar is LL(0), LR(0), SLR(1).
              Some questions asking us to convert a grammar to regular
              expressions may be there. Left factoring and left recursion
              elimination are also highly probable to come in the exam.
            </Typography>
            <br />
            <Typography
              variant='p'
              // component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Starting time: August 31st, 2021 - 10:00am
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card
          style={{
            minWidth: 275,
            boxShadow:
              'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}
        >
          <CardContent>
            <Typography
              variant='h5'
              component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Information Security - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              A class test will be held on number theory chapters. We are
              expected to revise the concepts of chinese remainder theorem,
              linear diophantine equations, euclid and extended euclid
              algorithm. Moreover, we must use these number theory concepts to
              figure a solution to a problem concerning RSA algorithm. There are
              two number theory solutions to solving digital signature problem.
              Revise those as it may come in the exam.
            </Typography>
            <br />
            <Typography
              variant='p'
              // component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Starting time: August 31st, 2021 - 12:00pm
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <br />
        <Divider variant='middle' />
        <br />
        <Typography variant='p' component='h1'>
          TOMORROW AND ONWARD'S UPCOMING EXAM
        </Typography>
        <Card
          style={{
            minWidth: 275,
            boxShadow:
              'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}
        >
          <CardContent>
            <Typography
              variant='h5'
              component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Artificial Intelligence - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              A class test will be held on model based agents. Questions will be
              of conceptual type. Some short notes telling us to explain
              different examples of model based agents and why they are
              considered model based agents may come in the test. Moreover, some
              questions from the topic of machine learning like - artificial
              neural networks, CNN, DNN, statistical classifiers may come.
            </Typography>
            <br />
            <Typography
              variant='p'
              // component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Starting time: August 31st, 2021 - 9:00am
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card
          style={{
            minWidth: 275,
            boxShadow:
              'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}
        >
          <CardContent>
            <Typography
              variant='h5'
              component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Compiler - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              Syllabus of the exam is chapter 2, 3, 4. Questions asking to find
              out the FIRST and FOLLOW of a grammar may come in the test. We may
              be asked to find whether or not a grammar is LL(0), LR(0), SLR(1).
              Some questions asking us to convert a grammar to regular
              expressions may be there. Left factoring and left recursion
              elimination are also highly probable to come in the exam.
            </Typography>
            <br />
            <Typography
              variant='p'
              // component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Starting time: August 31st, 2021 - 10:00am
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card
          style={{
            minWidth: 275,
            boxShadow:
              'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}
        >
          <CardContent>
            <Typography
              variant='h5'
              component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Information Security - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              A class test will be held on number theory chapters. We are
              expected to revise the concepts of chinese remainder theorem,
              linear diophantine equations, euclid and extended euclid
              algorithm. Moreover, we must use these number theory concepts to
              figure a solution to a problem concerning RSA algorithm. There are
              two number theory solutions to solving digital signature problem.
              Revise those as it may come in the exam.
            </Typography>
            <br />
            <Typography
              variant='p'
              // component='h2'
              style={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '5px',
                padding: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            >
              Starting time: August 31st, 2021 - 12:00pm
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
