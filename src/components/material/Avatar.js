import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 20,
    width: 80,
    height: 80
  }
})

const ImageAvatars = ({ name, avatar }) => {
  const classes = useStyles()

  return (
    <Avatar src={avatar} alt={`Avatar of ${name}`} className={classes.bigAvatar} />
  )
}

export default ImageAvatars
