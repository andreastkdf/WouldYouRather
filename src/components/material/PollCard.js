import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import ImageAvatars from "./Avatar"
import { formatDate } from "../../utils/helpers"
import CardContentResults from "./CardContentResults"
import CardContentSummary from "./CardContentSummary"
import CardContentAnswerForm from "../CardContentAnswerForm"

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

const PollCard = ({ poll, authedUser, viewResults, summary }) => {
  const { name, optionOne, optionTwo, timestamp, avatar } = poll
  let cardContent = ""

  const classes = useStyles()

  if (viewResults && !summary) {
    cardContent = (
      <CardContentResults
        optionOne={optionOne}
        optionTwo={optionTwo}
        authedUser={authedUser}
      />
    )
  } else if (summary) {
    cardContent = (
      <CardContentSummary optionOne={optionOne} optionTwo={optionTwo} />
    )
  } else {
    cardContent = <CardContentAnswerForm poll={poll} authedUser={authedUser} />
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<ImageAvatars name={name} avatar={avatar} />}
        title={name}
        subheader={formatDate(timestamp)}
      />
      {cardContent}
    </Card>
  )
}

export default PollCard
