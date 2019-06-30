import React from "react"
import SwipeableViews from "react-swipeable-views"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const TabContainer = ({ children }) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  }
}))

const PollTabs = ({ unanswered, answered }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  function handleChangeIndex(index) {
    setValue(index)
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Unanswered Questions" />
        <Tab label="Answered Questions" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {value === 0 && (
          <TabContainer dir={theme.direction}>
            <ul>
              {unanswered.map(id => (
                <li key={id}>
                  <div>Poll ID: {id}</div>
                </li>
              ))}
            </ul>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer dir={theme.direction}>
            <ul>
              {answered.map(id => (
                <li key={id}>
                  <div>Poll ID: {id}</div>
                </li>
              ))}
            </ul>
          </TabContainer>
        )}
      </SwipeableViews>
    </Paper>
  )
}

export default PollTabs
