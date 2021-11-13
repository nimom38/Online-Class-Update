import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CardActions } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '80px',
    height: '30px',
    padding: '0px',
  },
  switchBase: {
    color: '#818181',
    padding: '0px',
    '&$checked': {
      '& + $track': {
        backgroundColor: '#23bf58',
      },
    },
  },
  thumb: {
    color: 'white',
    width: '40px',
    height: '30px',
    // margin: '0px',
    borderRadius: '20px',
  },
  track: {
    borderRadius: '20px',
    backgroundColor: '#818181',
    opacity: '1 !important',
    '&:after, &:before': {
      color: 'white',
      fontSize: '11px',
      position: 'absolute',
      top: '8px',
    },
    '&:after': {
      content: "'DONE'",
      left: '7px',
    },
    '&:before': {
      content: "'DUE'",
      right: '7px',
    },
  },
  checked: {
    color: '#23bf58 !important',
    transform: 'translateX(41px) !important',
  },
})

export default function Upcoming() {
  const classes = useStyles()
  const theme = useTheme()
  const [done, setDone] = useState(false)
  // window.scrollTo(0, 0)

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Typography variant='p' component='h1'>
          COMPLETE
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
              Bayes theorem assignment: 1) Why we need the extension of Bayes
              theorem? Write the equations of the two extended Bayes theorem.
              Show two application areas of these extended Bayes theorem. 2)
              What is the real problem in applying the Bayes theorem? How can
              you overcome this problem?
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
              Deadline: November 27th, 2021 - 12:00am
            </Typography>
          </CardContent>
          <CardActions>
            <Switch
              checked={done}
              onChange={() => setDone(!done)}
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
              }}
            />
          </CardActions>
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
              A presentation will be taken on Digital Signature. We are required
              to show how the SHA and SHA-3 works. Moreover, we need to show the
              number theoretical mathematics behind the procedure in digital
              signatures. The applications and disadvantages are to be shown
              too.
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
              Deadline: August 31st, 2021 - 12:00am
            </Typography>
          </CardContent>
          <CardActions>
            <Switch
              checked={done}
              onChange={() => setDone(!done)}
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
              }}
            />
          </CardActions>
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
              Artificial Intelligence - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              Complete the prolog assignments. Make a poster of A* search. We
              need to present them to the professor infront of the whole class.
              After presentation a class test will be taken on agent system and
              belief rule networks.
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
              Deadline: August 21st, 2021 - 12:00am
            </Typography>
          </CardContent>
          <CardActions>
            <Switch
              checked={done}
              onChange={() => setDone(!done)}
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
              }}
            />
          </CardActions>
        </Card>
      </Grid>

      <Grid item>
        <br />
        <Divider variant='middle' />
        <br />
        <Typography variant='p' component='h1'>
          INCOMPLETE
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
              Bayes theorem assignment: 1) Why we need the extension of Bayes
              theorem? Write the equations of the two extended Bayes theorem.
              Show two application areas of these extended Bayes theorem. 2)
              What is the real problem in applying the Bayes theorem? How can
              you overcome this problem?
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
              Deadline: November 27th, 2021 - 12:00am
            </Typography>
          </CardContent>
          <CardActions>
            <Switch
              checked={done}
              onChange={() => setDone(!done)}
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
              }}
            />
          </CardActions>
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
              A presentation will be taken on Digital Signature. We are required
              to show how the SHA and SHA-3 works. Moreover, we need to show the
              number theoretical mathematics behind the procedure in digital
              signatures. The applications and disadvantages are to be shown
              too.
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
              Deadline: August 31st, 2021 - 12:00am
            </Typography>
          </CardContent>
          <CardActions>
            <Switch
              checked={done}
              onChange={() => setDone(!done)}
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
              }}
            />
          </CardActions>
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
              Artificial Intelligence - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              Complete the prolog assignments. Make a poster of A* search. We
              need to present them to the professor infront of the whole class.
              After presentation a class test will be taken on agent system and
              belief rule networks.
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
              Deadline: August 21st, 2021 - 12:00am
            </Typography>
          </CardContent>
          <CardActions>
            <Switch
              checked={done}
              onChange={() => setDone(!done)}
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
              }}
            />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
