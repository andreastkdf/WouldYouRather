let users = {
  atkdf: {
    id: "atkdf",
    name: "Andrea Kostakis",
    avatarURL: "./avatars/atkdf.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo"
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
  },
  pstewart: {
    id: "pstewart",
    name: "Phil S.",
    avatarURL: "./avatars/pstewart.png",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
      "8xf0y6ziyjabvozdd253nd": "optionTwo"
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"]
  },
  elam: {
    id: "elam",
    name: "Ephie L.",
    avatarURL: "./avatars/elam.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo"
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"]
  },
  dashton: {
    id: "dashton",
    name: "David A.",
    avatarURL: "./avatars/dashton.png",
    answers: { "8xf0y6ziyjabvozdd253nd": "optionTwo" },
    questions: []
  },
  ctomlin: {
    id: "ctomlin",
    name: "Charles T.",
    avatarURL: "./avatars/ctomlin.png",
    answers: {},
    questions: []
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "atkdf",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["atkdf"],
      text: "have horrible short term memory"
    },
    optionTwo: {
      votes: ["pstewart", "dashton"],
      text: "have horrible long term memory"
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "elam",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero"
    },
    optionTwo: {
      votes: ["elam", "atkdf"],
      text: "become a supervillain"
    }
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "atkdf",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic"
    },
    optionTwo: {
      votes: [],
      text: "be telepathic"
    }
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "pstewart",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer"
    },
    optionTwo: {
      votes: ["atkdf"],
      text: "be a back-end developer"
    }
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "pstewart",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["pstewart"],
      text: "find $50 yourself"
    },
    optionTwo: {
      votes: ["elam"],
      text: "have your best friend find $500"
    }
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "elam",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["elam"],
      text: "write JavaScript"
    },
    optionTwo: {
      votes: ["pstewart"],
      text: "write Swift"
    }
  },
  df674vofupe1dqz9em77er: {
    id: "df674vofupe1dqz9em77er",
    author: "dashton",
    timestamp: 1561908195,
    optionOne: {
      votes: [],
      text: "Use Eclipse"
    },
    optionTwo: {
      votes: [],
      text: "Use VS Code"
    }
  },
  lyrxz4rsoxrweisfue2f9i: {
    id: "lyrxz4rsoxrweisfue2f9i",
    author: "elam",
    timestamp: 1561908505720,
    optionOne: {
      votes: [],
      text: "Buy snacks"
    },
    optionTwo: {
      votes: [],
      text: "Buy tea"
    }
  }
}

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  )
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000)
  })
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000)
  })
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  }
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author
    const formattedQuestion = formatQuestion(question)

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
