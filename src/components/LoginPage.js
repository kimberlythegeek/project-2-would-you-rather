import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Object } from 'core-js';
import { setAuthedUser } from '../actions/authedUser'
import AddUser from './AddUser'

class LoginPage extends Component {

  state = {
    addUser: false,
    selected: true
  }

  showNewUserForm = (event) => {
    event.preventDefault()

    this.setState({
      addUser: true,
      selected: false
    })
  }

  handleSetUser = (event) => {
    event.preventDefault()

    const { dispatch } = this.props
    const newUser = event.target.value
    dispatch(setAuthedUser(newUser))
  }

  render () {
    const { users, userIds } = this.props
    const { addUser, selected } = this.state
    console.table(users)
    return (
      <div className='login-page-container text-center'>
        <form className='form-signin'>
         <h1 className='h3 mb-3'>Login</h1>
          <div className='login-form form-group'>
            <label className='sr-only' htmlFor='select-username'>Username</label>
            <select className='custom-select' name='select-username' id='select-username'>
              <option disabled selected={selected}>-- Select a User --</option>
              {userIds.map((id)=> (
                <option
                  onClick={this.handleSetUser}
                  key={id}
                  value={id}>
                    {users[id].name}
                  </option>
              ))}
              <option value='' disabled>_________________</option>
              <option onClick={this.showNewUserForm} value='new'>New User</option>
            </select>
          </div>
          {addUser && (
            <AddUser />
          )}
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(LoginPage)