export const RECEIVE_USERS = "RECEIVE_USERS"
export const ADD_USER_ANSWER = "ADD_USER_ANSWER"

// Receive users action creator
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

function addUserAnswer({ user, qid, answer }) {
  return {
    type: ADD_USER_ANSWER,
    user,
    qid,
    answer
  }
}

export function handleUserAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const user = authedUser
    dispatch(addUserAnswer({ user, qid, answer }))
  }
}
