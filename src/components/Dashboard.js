import React from 'react'
import Question from './Question'
import QuestionContainer from './containers/QuestionContainer';

const Dashboard = ({ authedUser, questionIds, onLogOut}) => (
  <div className='col-10 dashboard-page-container'>
    <button
      className='btn btn-primary'
       onClick={onLogOut}>Log Out</button>
      <h1>Dashboard</h1>
      <div>Logged in as {authedUser}</div>

      <QuestionContainer questionIds={questionIds}/>
  </div>
)

export default Dashboard