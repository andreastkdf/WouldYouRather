import React from "react"
import PollCard from "./PollCard"

const PollSummaryCard = ({ poll }) => {
  return <PollCard poll={poll} summary="true" />
}

export default PollSummaryCard
