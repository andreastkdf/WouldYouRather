export const RECEIVE_USERS = "RECEIVE_USERS"

// Receive users action creator
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
