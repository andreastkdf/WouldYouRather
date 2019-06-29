import { combineReducers } from "redux"
import authedUser from "./authedUser"
import users from "./users"
import polls from "./polls"

// Combine all Reducers into a main root Reducer
export default combineReducers({
  authedUser,
  users,
  polls
})
