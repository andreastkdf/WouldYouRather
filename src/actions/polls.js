import { saveQuestionAnswer } from "../utils/api"

export const RECEIVE_POLLS = "RECEIVE_POLLS"
export const ADD_POLL_ANSWER = "ADD_POLL_ANSWER"

// Receive polls action creator
export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}

function addQuestionAnswer({ authedUser, answer, qid }) {
  return {
    type: ADD_POLL_ANSWER,
    authedUser,
    answer,
    qid
  }
}

export function handlePollAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(() => dispatch(addQuestionAnswer({ authedUser, answer, qid })))
  }
}
