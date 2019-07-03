import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ImageAvatars from "./Avatar"
import { formatDate } from "../../utils/helpers"
import OptionResult from "./OptionResult"

const useStyles = makeStyles({
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
  pos: {
    marginBottom: 12
  }
})

const PollCard = ({ poll, authedUser, viewResults }) => {
  const { name, optionOne, optionTwo, timestamp, avatar } = poll
  let optionOneVotes = optionOne.votes.length
  let optionTwoVotes = optionTwo.votes.length
  let totalVotes = optionOneVotes + optionTwoVotes

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<ImageAvatars name={name} avatar={avatar} />}
        title={name}
        subheader={formatDate(timestamp)}
      />

      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Would You Rather ...
        </Typography>

        {viewResults ? (
          <span>
            <div className={classes.option}>
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
            <div className={classes.option}>
              <Typography variant="h5" component="h2">
                {optionTwo.text} ?
              </Typography>
              <OptionResult
                option={optionTwo}
                authedUser={authedUser}
                totalVotes={totalVotes}
              />
            </div>
          </span>
        ) : (
          <span>
            <div className={classes.option}>
              <Typography variant="h5" component="h2">
                {optionOne.text} ?
              </Typography>
              <Typography variant="h6" component="h2" color="textSecondary">
                or
              </Typography>
            </div>
            <div className={classes.option}>
              <Typography variant="h5" component="h2">
                {optionTwo.text} ?
              </Typography>
            </div>
          </span>
        )}
      </CardContent>

      {viewResults ? (
        ""
      ) : (
        <CardActions>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            style={{ marginLeft: "auto" }}
          >
            View Poll
          </Button>
        </CardActions>
      )}
    </Card>
  )
}

export default PollCard
