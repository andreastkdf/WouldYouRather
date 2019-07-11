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
import Login from "./Login"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser, avatar, loading } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {authedUser && loading === true ? (
              <div>
                <MenuAppBar username={authedUser} avatar={avatar} />
                <LoadingBar />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/questions/:id" component={Poll} />
                  <Route path="/add" component={NewPoll} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            ) : (
              <Login />
            )}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser, users, loadingBar }) {
  return {
    authedUser: authedUser,
    loading: (authedUser && users && loadingBar) !== null,
    avatar: (authedUser && users) !== null ? users[authedUser].avatarURL : null
  }
}

export default connect(mapStateToProps)(App)
