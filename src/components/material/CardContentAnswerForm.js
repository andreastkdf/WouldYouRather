import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import OptionResult from "./OptionResult"

const useStyles = makeStyles({
  title: {
    fontSize: 16
  }
})

const CardContentAnswerForm = ({}) => {
  const classes = useStyles()

  return (
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Would You Rather ...
      </Typography>
      Answer Form with a submit button
    </CardContent>
  )
}

export default CardContentAnswerForm
