import { getInitialData } from "../utils/api"
import { receivePolls } from "./polls"
import { receiveUsers } from "./users"
import { setAuthedUser } from "./authedUser"

const AUTHED_USER = "atkdf"

// Use the redux-thunk pattern
// Makes an async request
export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      // Adding polls and users to the Redux Store
      dispatch(receiveUsers(users))
      dispatch(receivePolls(questions))
      dispatch(setAuthedUser(AUTHED_USER))
    })
  }
}
