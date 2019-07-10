import React, { Component } from "react"
import { connect } from "react-redux"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import LeaderboardTableHead from "./material/LeaderboardTableHead"
import User from "./User"

const styles = theme => ({
  paper: {
    maxWidth: 600,
    overflowX: "auto",
    marginBottom: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "auto"
  },
  table: {
    minWidth: 200,
    maxWidth: 600
  }
})

class Leaderboard extends Component {
  render() {
    const { userIds, classes } = this.props
    return (
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <LeaderboardTableHead />
          <TableBody>
            {userIds.map((id, index) => (
              <User key={id} id={id} position={index + 1} />
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        Object.keys(users[b].questions).length -
        (Object.keys(users[a].answers).length +
          Object.keys(users[a].questions).length)
    )
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard))
