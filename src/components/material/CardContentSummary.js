import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import CardActions from "@material-ui/core/CardActions"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  title: {
    fontSize: 16
  }
})

const CardContentSummary = ({ id, optionOne, optionTwo }) => {
  const classes = useStyles()

  return (
    <span>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Would You Rather ...
        </Typography>
        <div>
          <Typography variant="h5" component="h2">
            {optionOne.text} ?
          </Typography>
          <Typography variant="h6" component="h2" color="textSecondary">
            or
          </Typography>
        </div>
        <div>
          <Typography variant="h5" component="h2">
            {optionTwo.text} ?
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Link
          to={`/questions/${id}`}
          style={{ textDecoration: "none", marginLeft: "auto" }}
        >
          <Button size="large" variant="contained" color="secondary">
            View Poll
          </Button>
        </Link>
      </CardActions>
    </span>
  )
}

export default CardContentSummary
