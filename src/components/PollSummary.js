import React, { Component } from "react"
import { connect } from "react-redux"
import { formatPoll } from "../utils/helpers"
import PollSummaryCard from "./material/PollSummaryCard"

class PollSummary extends Component {
  render() {
    const { poll } = this.props

    if (poll === null) {
      return <p>This poll doesn't exist</p>
    }

    return <PollSummaryCard poll={poll} />
  }
}

function mapStateToProps({ polls, users }, { id }) {
  const poll = polls[id]

  return {
    poll: poll ? formatPoll(poll, users[poll.author]) : null
  }
}

export default connect(mapStateToProps)(PollSummary)
