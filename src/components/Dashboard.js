import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import QuestionPage from './QuestionPage';
import Header from './Header'

const mapStateToProps = ({ questions }) => {
  return {
    questionIds: Object.keys(questions)
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onLogOut: () => {
      dispatch(setAuthedUser(null))
    }
  }
}

const Dashboard = ({ questionIds, onLogOut, location }) => (
  <div className='col-10 dashboard-page-container'>
    <Header onLogOut={onLogOut} />
    <h1>Dashboard</h1>location: {location.pathname}
    <QuestionPage questionIds={questionIds} location={location} />
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)