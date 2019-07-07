import React, { Component } from "react"
import { connect } from "react-redux"
import PollCard from "./material/PollCard"
import { formatPoll } from "../utils/helpers"

class Poll extends Component {
  render() {
    const { poll, viewResults, authedUser } = this.props

    if (poll === null) {
      return <p>This poll doesn't exist</p>
    }

    return (
      <PollCard poll={poll} authedUser={authedUser} viewResults={viewResults} />
    )
  }
}

function mapStateToProps({ polls, users, authedUser }, { id }) {
  const poll = polls[id]

  return {
    poll: poll ? formatPoll(poll, users[poll.author]) : null,
    viewResults: users[authedUser].answers[id] ? true : false,
    authedUser
  }
}

export default connect(mapStateToProps)(Poll)
