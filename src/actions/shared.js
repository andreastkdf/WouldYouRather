import { getInitialData } from "../utils/api"
import { receivePolls } from "./polls"
import { receiveUsers } from "./users"
import { showLoading, hideLoading } from "react-redux-loading"

// Use the redux-thunk pattern
// Makes an async request
export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      // Adding polls and users to the Redux Store
      dispatch(receiveUsers(users))
      dispatch(receivePolls(questions))
      dispatch(hideLoading())
    })
  }
}
