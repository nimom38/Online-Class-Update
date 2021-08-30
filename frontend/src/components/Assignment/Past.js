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

export default function Past() {
  const classes = useStyles()
  const theme = useTheme()
  const [done, setDone] = useState(false)
  window.scrollTo(0, 0)

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Typography variant='p' component='h1'>
          COMPLETE
        </Typography>
        <Card
          style={{
            minWidth: 275,
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
              Theory of Computation - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              nisi, atque magnam laudantium praesentium cupiditate doloribus
              nemo consequuntur culpa eos nam perspiciatis sint accusamus dolor
              optio veniam consequatur reiciendis cumque.
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
              Theory of Computation - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              nisi, atque magnam laudantium praesentium cupiditate doloribus
              nemo consequuntur culpa eos nam perspiciatis sint accusamus dolor
              optio veniam consequatur reiciendis cumque.
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
              Theory of Computation - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              nisi, atque magnam laudantium praesentium cupiditate doloribus
              nemo consequuntur culpa eos nam perspiciatis sint accusamus dolor
              optio veniam consequatur reiciendis cumque.
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
        <br />
        <Divider variant='middle' />
        <br />
        <Typography variant='p' component='h1'>
          INCOMPLETE
        </Typography>
        <Card
          style={{
            minWidth: 275,
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
              Theory of Computation - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              nisi, atque magnam laudantium praesentium cupiditate doloribus
              nemo consequuntur culpa eos nam perspiciatis sint accusamus dolor
              optio veniam consequatur reiciendis cumque.
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
              Theory of Computation - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              nisi, atque magnam laudantium praesentium cupiditate doloribus
              nemo consequuntur culpa eos nam perspiciatis sint accusamus dolor
              optio veniam consequatur reiciendis cumque.
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
              Theory of Computation - CSE 7XX
            </Typography>
            <br />
            <br />
            <Typography variant='body2' component='p'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              nisi, atque magnam laudantium praesentium cupiditate doloribus
              nemo consequuntur culpa eos nam perspiciatis sint accusamus dolor
              optio veniam consequatur reiciendis cumque.
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
    </Grid>
  )
}
