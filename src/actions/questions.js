import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function saveAnswer ({qid, answer, authedUser}) {
  return {
    type: SAVE_ANSWER,
    qid,
    answer,
    authedUser
  }
}

export function handleSaveAnswer({qid, answer}) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    
    return saveQuestionAnswer({
      qid,
      answer,
      authedUser
    })
      .then(() => dispatch(saveAnswer({
        qid,
        answer,
        authedUser
      })))
  }
}