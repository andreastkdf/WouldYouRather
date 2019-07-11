import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import LoadingBar from "react-redux-loading"
import { handleInitialData } from "../actions/shared"
import Home from "./Home"
import MenuAppBar from "./material/MenuAppBar"
import NewPoll from "./NewPoll"
import Poll from "./Poll"
import Leaderboard from "./Leaderboard"
import NotFound from "./NotFound"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser, avatar } = this.props
    return (
      <Router>
        <Fragment>
          <div className="container">
            <MenuAppBar username={authedUser} avatar={avatar} />
            <LoadingBar />
            {this.props.loading === true ? null : (
              <div>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/questions/:id" component={Poll} />
                  <Route path="/add" component={NewPoll} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    authedUser: authedUser,
    avatar: (authedUser && users) !== null ? users[authedUser].avatarURL : null
  }
}

export default connect(mapStateToProps)(App)
