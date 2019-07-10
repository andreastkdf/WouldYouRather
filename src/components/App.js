import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import LoadingBar from "react-redux-loading"
import { handleInitialData } from "../actions/shared"
import Home from "./Home"
import MenuAppBar from "./material/MenuAppBar"
import NewPoll from "./NewPoll"
import Poll from "./Poll"
import Leaderboard from "./Leaderboard"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <MenuAppBar />
            <LoadingBar />
            {this.props.loading === true ? null : (
              <div>
                <Route path="/" exact component={Home} />
                <Route path="/questions/:id" component={Poll} />
                <Route path="/add" component={NewPoll} />
                <Route path="/leaderboard" component={Leaderboard} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
