export const RECEIVE_USERS = "RECEIVE_USERS"
export const ADD_USER_ANSWER = "ADD_USER_ANSWER"

// Receive users action creator
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
