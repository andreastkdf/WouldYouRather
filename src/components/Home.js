import React, { Component } from "react"
import { connect } from "react-redux"
import MenuAppBar from "./material/MenuAppBar"
import CenteredTabs from "./material/Tabs"

class Home extends Component {
  render() {
    return (
      <div>
        <MenuAppBar />
        <CenteredTabs
          unanswered={this.props.unansweredPollIds}
          answered={this.props.answeredPollIds}
        />
      </div>
    )
  }
}

function mapStateToProps({ polls }) {
  return {
    answeredPollIds: Object.keys(polls)
      .filter(
        id =>
          polls[id].optionOne.votes.length > 0 ||
          polls[id].optionTwo.votes.length > 0
      )
      .sort((a, b) => polls[b].timestamp - polls[a].timestamp),
    unansweredPollIds: Object.keys(polls)
      .filter(
        id =>
          polls[id].optionOne.votes.length === 0 &&
          polls[id].optionTwo.votes.length === 0
      )
      .sort((a, b) => polls[b].timestamp - polls[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)
