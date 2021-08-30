import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Grid } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function VerticalTabs() {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={3}>
      <Grid
        item
        lg={4}
        xs={12}
        style={
          matches
            ? {
                backgroundColor: theme.palette.background.default,
                height: '1vh',
                position: 'sticky',
                top: 70,
                order: 2,
                opacity: 1,
              }
            : {
                backgroundColor: theme.palette.background.default,
                position: 'sticky',
                top: 56,
                order: 1,
                width: '100%',
                opacity: 1,
              }
        }
      >
        <Tabs
          orientation={matches ? 'vertical' : 'horizontal'}
          value={value}
          onChange={handleChange}
          styles={
            matches
              ? {
                  flexGrow: 1,
                  borderLeft: `1px solid ${theme.palette.divider}`,
                }
              : { flexGrow: 1 }
          }
          indicatorColor='primary'
          textColor='primary'
          TabIndicatorProps={
            matches
              ? {
                  style: {
                    left: '0',
                  },
                }
              : {}
          }
          centered={matches ? false : true}
        >
          <Tab
            label='UPCOMING TASKS'
            value={0}
            style={{ marginLeft: '20px' }}
          />
          <Tab label='PAST TASKS' value={1} style={{ marginLeft: '20px' }} />
        </Tabs>
      </Grid>
      <Grid
        item
        lg={8}
        xs={12}
        style={
          matches
            ? {
                order: 1,
              }
            : {
                order: 2,
              }
        }
      >
        
      </Grid>
    </Grid>
  )
}
