import React, { Component } from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import { CardContent } from "@material-ui/core"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { Redirect } from "react-router-dom"
import ImageAvatars from "./material/Avatar"
import { handleAddPoll } from "../actions/polls"

const styles = theme => ({
  card: {
    minWidth: 350,
    maxWidth: 600,
    marginBottom: 25,
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    fontSize: 16
  },
  textfield: {
    marginBottom: 50
  }
})

class NewPoll extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false
  }

  handleChange = e => {
    const option = e.target.id
    const value = e.target.value

    this.setState(() => ({
      [option]: value
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddPoll(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      toHome: true
    }))
  }

  render() {
    const { name, avatar, classes } = this.props
    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to="/" />
    }
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<ImageAvatars name={name} avatar={avatar} />}
          title={name}
        />
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Would You Rather ...
          </Typography>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <TextField
              id="optionOne"
              label="Answer one"
              placeholder="Write your first option here."
              fullWidth
              margin="normal"
              className={classes.textfield}
              onChange={this.handleChange}
            />
            <Typography variant="h6" component="h2" color="textSecondary">
              or
            </Typography>
            <TextField
              id="optionTwo"
              label="Answer two"
              placeholder="Write your second option here."
              fullWidth
              margin="normal"
              className={classes.textfield}
              onChange={this.handleChange}
            />
            <CardActions>
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="secondary"
                style={{ marginLeft: "auto" }}
                disabled={
                  this.state.optionOne === "" || this.state.optionTwo === ""
                }
              >
                Submit poll
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser]

  return {
    name: user.name,
    avatar: user.avatarURL
  }
}

export default connect(mapStateToProps)(withStyles(styles)(NewPoll))
