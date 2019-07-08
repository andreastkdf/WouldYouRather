import { saveQuestion, saveQuestionAnswer } from "../utils/api"

export const RECEIVE_POLLS = "RECEIVE_POLLS"
export const ADD_POLL = "ADD_POLL"
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

function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll
  }
}

export function handleAddPoll(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const author = authedUser

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then(poll => dispatch(addPoll(poll)))
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
