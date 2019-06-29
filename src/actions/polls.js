export const RECEIVE_POLLS = "RECEIVE_POLLS"

// Receive polls action creator
export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}
