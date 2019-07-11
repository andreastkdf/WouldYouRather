import React, { Component } from "react"
import { connect } from "react-redux"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import ImageAvatars from "./material/Avatar"

class User extends Component {
  render() {
    const { user, numQuestions, numAnswers, sum, position } = this.props

    if (user === null) {
      return <p>This user doesn't exist.</p>
    }
    return (
      <TableRow key={user.id}>
        <TableCell align="center">{position}</TableCell>
        <TableCell align="center">
          <ImageAvatars name={user.name} avatar={user.avatarURL} />
          {user.name}
        </TableCell>
        <TableCell align="center">{numQuestions}</TableCell>
        <TableCell align="center">{numAnswers}</TableCell>
        <TableCell align="center">{sum}</TableCell>
      </TableRow>
    )
  }
}

function mapStateToProps({ users }, { id, position }) {
  const user = users[id]
  const numQuestions = Object.keys(user.questions).length
  const numAnswers = Object.keys(user.answers).length

  return {
    user: user,
    numQuestions: numQuestions,
    numAnswers: numAnswers,
    sum: numQuestions + numAnswers,
    position: position
  }
}

export default connect(mapStateToProps)(User)
