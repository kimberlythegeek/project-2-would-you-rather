import { saveUser } from '../utils/api'
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from './loading';

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'

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

export function handleAddUser (username, fullName) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveUser({ username, fullName })
      .then((user) => dispatch(addUser(user)))
      .then(() => dispatch(setAuthedUser(username)))
      .then(() => dispatch(hideLoading()))
  }
}