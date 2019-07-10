import React from "react"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

export default function LeaderboardTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Position</TableCell>
        <TableCell align="center">User</TableCell>
        <TableCell align="center">Questions asked</TableCell>
        <TableCell align="center">Questions answered</TableCell>
        <TableCell align="center">Total</TableCell>
      </TableRow>
    </TableHead>
  )
}
