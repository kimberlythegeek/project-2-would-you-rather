import { saveUser } from '../utils/api'
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from './loading';

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

function addUser (user) {
  return {
    type: ADD_USER,
    user
  }
}

function updateUserAnswers({qid, answer, authedUser}) {
  return {
    type: UPDATE_USER_ANSWERS,
    qid,
    answer,
    authedUser
  }
}

export function handleAddUser (username, fullName) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveUser({ username, fullName })
      .then((user) => dispatch(addUser(user)))
      .then(() => dispatch(setAuthedUser(username)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleUserAnswers({qid, answer}) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(updateUserAnswers({
      qid,
      answer,
      authedUser
    }))
  }
}