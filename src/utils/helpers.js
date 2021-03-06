export function formatDate(timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString("en-US")
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString()
}

export function formatPoll(poll, author) {
  const { id, optionOne, optionTwo, timestamp } = poll
  const { name, avatarURL } = author

  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL
  }
}
