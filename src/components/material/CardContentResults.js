import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import OptionResult from "./OptionResult"

const useStyles = makeStyles({
  title: {
    fontSize: 16
  }
})

const CardContentResults = ({ optionOne, optionTwo, authedUser }) => {
  let optionOneVotes = optionOne.votes.length
  let optionTwoVotes = optionTwo.votes.length
  let totalVotes = optionOneVotes + optionTwoVotes

  const classes = useStyles()

  return (
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Would You Rather ...
      </Typography>
      <div>
        <Typography variant="h5" component="h2">
          {optionOne.text} ?
        </Typography>
        <OptionResult
          option={optionOne}
          authedUser={authedUser}
          totalVotes={totalVotes}
        />
        <Typography variant="h6" component="h2" color="textSecondary">
          or
        </Typography>
      </div>
      <div>
        <Typography variant="h5" component="h2">
          {optionTwo.text} ?
        </Typography>
        <OptionResult
          option={optionTwo}
          authedUser={authedUser}
          totalVotes={totalVotes}
        />
      </div>
    </CardContent>
  )
}

export default CardContentResults
