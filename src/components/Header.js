import React from 'react'
import { connect } from 'react-redux'

class Header extends React.Component {

  render() {
    const { authedUser, onLogOut } = this.props
    return (
      <div>
        <button
          className='btn btn-primary'
          onClick={onLogOut}>Log Out</button>
        <div>Logged in as {authedUser}</div>
      </div>
    )
  }

}

const mapStateToProps = ({ authedUser }) => { return { authedUser } }


export default connect(mapStateToProps)(Header)