import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import moment from 'moment'
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    minWidth: '1px',
    textTransform: 'none',
  },
  indicator: {
    height: '100%',
    borderRadius: '10px',
    zIndex: '-1',
  },
})

const Routine = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))
  const [value, setValue] = useState(Number(moment().format('d')))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        centered
        classes={{ indicator: classes.indicator }}
        style={{
          backgroundColor: theme.palette.background.default,
          position: 'sticky',
          top: matches ? '65px' : '55px',
          opacity: 1,
          paddingTop: matches ? '8px' : '15px',
        }}
      >
        <Tab
          label='Sun'
          classes={{
            root: classes.tab,
          }}
          style={{
            color: value === 0 ? 'white' : 'blue',
          }}
          value={0}
        />
        <Tab
          label='Mon'
          classes={{
            root: classes.tab,
          }}
          style={{
            color: value === 1 ? 'white' : 'blue',
          }}
          value={1}
        />
        <Tab
          label='Tue'
          classes={{
            root: classes.tab,
          }}
          style={{
            color: value === 2 ? 'white' : 'blue',
          }}
          value={2}
        />
        <Tab
          label='Wed'
          classes={{
            root: classes.tab,
          }}
          style={{
            color: value === 3 ? 'white' : 'blue',
          }}
          value={3}
        />
        <Tab
          label='Thu'
          classes={{
            root: classes.tab,
          }}
          style={{
            color: value === 4 ? 'white' : 'blue',
          }}
          value={4}
        />
        <Tab
          label='Fri'
          classes={{
            root: classes.tab,
          }}
          style={{
            color: value === 5 ? 'white' : 'blue',
          }}
          value={5}
        />
        <Tab
          label='Sat'
          classes={{
            root: classes.tab,
          }}
          style={{
            color: value === 6 ? 'white' : 'blue',
          }}
          value={6}
        />
      </Tabs>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            style={{
              width: matches ? '50%' : '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: '15px',
            }}
          >
            <CardContent>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={4}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='p'>12:00pm</Typography>
                  <FiberManualRecordOutlinedIcon
                    style={{
                      color: 'blue',
                      width: '15px',
                      height: 'auto',
                    }}
                  />
                  <Typography variant='p'>1:00pm</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant='h5'
                    component='h2'
                    style={{ color: 'blue' }}
                  >
                    Artificial Intelligence
                  </Typography>
                  <br />
                  <Typography variant='p' style={{ color: 'blue' }}>
                    CSE 7XX
                  </Typography>
                  <br />
                  <Typography variant='p' style={{ color: 'blue' }}>
                    Rokon Faruqui
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card
            style={{
              width: matches ? '50%' : '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: '15px',
            }}
          >
            <CardContent>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={4}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='p'>12:00pm</Typography>
                  <FiberManualRecordOutlinedIcon
                    style={{
                      color: 'blue',
                      width: '15px',
                      height: 'auto',
                    }}
                  />
                  <Typography variant='p'>1:00pm</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant='h5'
                    component='h2'
                    style={{ color: 'blue' }}
                  >
                    Artificial Intelligence
                  </Typography>
                  <br />
                  <Typography variant='p' style={{ color: 'blue' }}>
                    CSE 7XX
                  </Typography>
                  <br />
                  <Typography variant='p' style={{ color: 'blue' }}>
                    Rokon Faruqui
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card
            style={{
              width: matches ? '50%' : '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: '15px',
            }}
          >
            <CardContent>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={4}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='p'>12:00pm</Typography>
                  <FiberManualRecordOutlinedIcon
                    style={{
                      color: 'blue',
                      width: '15px',
                      height: 'auto',
                    }}
                  />
                  <Typography variant='p'>1:00pm</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant='h5'
                    component='h2'
                    style={{ color: 'blue' }}
                  >
                    Artificial Intelligence
                  </Typography>
                  <br />
                  <Typography variant='p' style={{ color: 'blue' }}>
                    CSE 7XX
                  </Typography>
                  <br />
                  <Typography variant='p' style={{ color: 'blue' }}>
                    Rokon Faruqui
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card
            style={{
              width: matches ? '50%' : '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: '15px',
            }}
          >
            <CardContent>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={4}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='p'>12:00pm</Typography>
                  <FiberManualRecordOutlinedIcon
                    style={{
                      color: 'blue',
                      width: '15px',
                      height: 'auto',
                    }}
                  />
                  <Typography variant='p'>1:00pm</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant='h5'
                    component='h2'
                    style={{ color: 'blue' }}
                  >
                    Artificial Intelligence
                  </Typography>
                  <br />
                  <Typography variant='p' style={{ color: 'blue' }}>
                    CSE 7XX
                  </Typography>
                  <br />
                  <Typography variant='p' style={{ color: 'blue' }}>
                    Rokon Faruqui
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Routine
