import React, { Component } from "react"
import { connect } from "react-redux"
import { formatPoll } from "../utils/helpers"
import PollSummaryCard from "./material/PollSummaryCard"

class PollSummary extends Component {
  render() {
    const { poll, authedUser } = this.props

    if (poll === null) {
      return <p>This poll doesn't exist</p>
    }

    return <PollSummaryCard poll={poll} authedUser={authedUser} />
  }
}

function mapStateToProps({ polls, users, authedUser }, { id }) {
  const poll = polls[id]

  return {
    poll: poll ? formatPoll(poll, users[poll.author]) : null,
    authedUser
  }
}

export default connect(mapStateToProps)(PollSummary)
