import { RECEIVE_POLLS, ADD_POLL, ADD_POLL_ANSWER } from "../actions/polls"

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls
      }
    case ADD_POLL_ANSWER:
      const { authedUser, answer, qid } = action
      let polls = {}

      polls = {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
      return {
        ...state,
        ...polls
      }
    case ADD_POLL:
      const { poll } = action
      return {
        ...state,
        [action.poll.id]: poll
      }

    default:
      return state
  }
}
