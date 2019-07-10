import React, { Component } from "react"
import { connect } from "react-redux"
import PollTabs from "./material/PollTabs"

class Home extends Component {
  render() {
    return (
      <div>
        <PollTabs
          unanswered={this.props.unansweredPollIds}
          answered={this.props.answeredPollIds}
        />
      </div>

      // <Poll id="8xf0y6ziyjabvozdd253nd" />

      // <NewPoll />

      // <Leaderboard />
    )
  }
}

function mapStateToProps({ polls, authedUser }) {
  return {
    answeredPollIds: Object.keys(polls)
      .filter(
        id =>
          polls[id].optionOne.votes.includes(authedUser) ||
          polls[id].optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => polls[b].timestamp - polls[a].timestamp),
    unansweredPollIds: Object.keys(polls)
      .filter(
        id =>
          !polls[id].optionOne.votes.includes(authedUser) &&
          !polls[id].optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => polls[b].timestamp - polls[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)
