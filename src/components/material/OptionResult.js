import React from "react"
import { Line } from "rc-progress"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline"

const useStyles = makeStyles({
  line: {
    maxWidth: 500
  },
  check: {
    float: "right",
    fontSize: 30
  }
})

const OptionResult = ({ option, authedUser, totalVotes }) => {
  let optionVotes = option.votes.length
  let optionPercent = (optionVotes / totalVotes) * 100

  const classes = useStyles()

  return (
    <span>
      {option.votes.indexOf(authedUser) !== -1 && (
        <CheckCircleOutline color="primary" className={classes.check} />
      )}
      <Typography>
        {optionVotes} out of {totalVotes} vote(s)
      </Typography>
      <Line
        className={classes.line}
        percent={optionPercent}
        strokeWidth="4"
        strokeColor="#3f51b5"
        trailColor="#f50057"
        trailWidth="4"
      />
    </span>
  )
}

export default OptionResult
