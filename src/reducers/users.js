import { RECEIVE_USERS } from "../actions/users"
import { ADD_POLL, ADD_POLL_ANSWER } from "../actions/polls"

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_POLL_ANSWER:
      const { authedUser, qid, answer } = action
      let users = {}

      users = {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }

      return {
        ...state,
        ...users
      }

    case ADD_POLL:
      const { poll } = action
      return {
        ...state,
        [poll.author]: {
          ...state[poll.author],
          questions: {
            ...state[poll.author].questions.concat(poll.id)
          }
        }
      }
    default:
      return state
  }
}
