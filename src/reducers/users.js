import { RECEIVE_USERS, ADD_USER, UPDATE_USER_ANSWERS } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_USER:
      return {
        ...state,
        [action.user.id]: action.user
      }
    case UPDATE_USER_ANSWERS:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    default:
      return state
  }
}