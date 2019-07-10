import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import CardActions from "@material-ui/core/CardActions"
import { connect } from "react-redux"
import { handlePollAnswer } from "../actions/polls"

const styles = theme => ({
  title: {
    fontSize: 16
  }
})

class CardContentAnswerForm extends Component {
  state = {
    vote: "",
    id: ""
  }

  handleChange = e => {
    const vote = e.target.value
    const { poll } = this.props
    const id = poll.id
    this.setState(() => ({
      vote,
      id
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { vote, id } = this.state
    const { dispatch } = this.props

    dispatch(handlePollAnswer(vote, id))
  }

  render() {
    const { poll, classes } = this.props
    const { optionOne, optionTwo } = poll

    return (
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Would You Rather ...
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <FormControl required>
            <RadioGroup name="option">
              <FormControlLabel
                value="optionOne"
                control={<Radio color="secondary" />}
                label={optionOne.text}
                onChange={this.handleChange}
              />
              <FormControlLabel
                value="optionTwo"
                control={<Radio color="secondary" />}
                label={optionTwo.text}
                onChange={this.handleChange}
              />
            </RadioGroup>
          </FormControl>
          <CardActions>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="secondary"
              style={{ marginLeft: "auto" }}
              disabled={this.state.vote === ""}
            >
              Submit vote
            </Button>
          </CardActions>
        </form>
      </CardContent>
    )
  }
}

export default connect()(withStyles(styles)(CardContentAnswerForm))
