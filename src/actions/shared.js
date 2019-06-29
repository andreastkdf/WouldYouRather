import { getInitialData } from "../utils/api"
import { receivePolls } from "./polls"
import { receiveUsers } from "./users"
import { setAuthedUser } from "./authedUsers"

const AUTHED_USER = "atkdf"

// Use the redux-thunk pattern
// Makes an async request
export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, polls }) => {
      // Adding polls and users to the Redux Store
      dispatch(receiveUsers(users))
      dispatch(receivePolls(polls))
      dispatch(setAuthedUser(AUTHED_USER))
    })
  }
}
