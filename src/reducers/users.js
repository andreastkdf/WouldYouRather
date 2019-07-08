import { RECEIVE_USERS, ADD_USER_ANSWER } from "../actions/users"
import { ADD_POLL } from "../actions/polls"

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_ANSWER:
      const { user, qid, answer } = action
      let users = {}

      users = {
        ...state,
        [user]: {
          ...state[user],
          answers: {
            ...state[user].answers,
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
