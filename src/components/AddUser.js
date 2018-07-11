import React, { Component } from 'react'
import { handleAddUser } from '../actions/users'
import { connect } from 'react-redux';

class AddUser extends Component {
  state = {
    username: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (event) => {
    event.preventDefault()

    const newValue = event.target.value
    const name = event.target.name
    this.setState({
      [name]: newValue
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { username, firstName, lastName } = this.state
    const { dispatch } = this.props
    const fullName = `${firstName} ${lastName}`

    dispatch(handleAddUser(username, fullName))
    this.setState({
      username: '',
      firstName: '',
      lastName: ''
    })
  }

  render() {
    const { username, firstName, lastName } = this.state
    return (
      <div className='text-left'>
        <div className='form-group'>
          <label htmlFor='username' className='sr-only'>Username</label>
          <input
                id='username'
                name='username'
                type='text'
                className='form-control'
                placeholder='Username'
                value={username}
                onChange={this.handleChange}
                required />
        </div>
        <div className='form-group'>
          <label className='sr-only'>First Name</label>
          <input
              id='first-name'
              name='firstName'
              type='text'
              className='form-control'
              placeholder='First Name'
              value={firstName}
              onChange={this.handleChange}
              required />
        </div>
        <div className='form-group'>
          <label className='sr-only'>Last Name</label>
          <input
              id='last-name'
              name='lastName'
              type='text'
              className='form-control'
              placeholder='Last Name'
              value={lastName}
              onChange={this.handleChange}
              required />
        </div>
        <button
          type='submit'
          className='btn btn-primary btn-lg btn-block'
          onClick={this.handleSubmit}>Submit</button>
      </div>
    )

  }
}

export default connect()(AddUser)