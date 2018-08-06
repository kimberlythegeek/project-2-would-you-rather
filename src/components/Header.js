import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  render() {
    const { authedUser, onLogOut } = this.props
    console.log(this.props)
    return (
      <nav className='nav justify-content-end'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/leaderboard' className='nav-link'>Leaderboard</Link>
        <button
          className='btn btn-primary btn-sm'
          onClick={onLogOut}>Log Out</button>
        <div>Logged in as {authedUser}</div>
      </nav>
    )
  }

}

const mapStateToProps = ({ authedUser }) => { return { authedUser } }


export default connect(mapStateToProps)(Header)