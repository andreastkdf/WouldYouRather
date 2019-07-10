import { combineReducers } from "redux"
import { loadingBarReducer } from "react-redux-loading"
import authedUser from "./authedUser"
import users from "./users"
import polls from "./polls"

// Combine all Reducers into a main root Reducer
export default combineReducers({
  authedUser,
  users,
  polls,
  loadingBar: loadingBarReducer
})
