import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ImageAvatars from "./Avatar"
import { formatDate } from "./../../utils/helpers"

const useStyles = makeStyles({
  card: {
    minWidth: 350,
    marginBottom: 25
  },
  title: {
    fontSize: 16
  },
  pos: {
    marginBottom: 12
  }
})

const PollSummaryCard = ({ poll }) => {
  const { name, optionOne, optionTwo, timestamp, avatar } = poll

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
        <Typography variant="h5" component="h2">
          {optionOne.text} ?
        </Typography>
        <Typography variant="h6" component="h2" color="textSecondary">
          or
        </Typography>
        <Typography variant="h5" component="h2">
          {optionTwo.text} ?
        </Typography>
      </CardContent>
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
    </Card>
  )
}

export default PollSummaryCard
