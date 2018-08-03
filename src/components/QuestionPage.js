import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import QuestionCard from './QuestionCard'
import NoQuestions from './NoQuestions'
import Question from './Question'

class QuestionPage extends React.Component {

  filterQuestions () {

    const { questions, authedUser, users } = this.props
    if(authedUser !== null) {
      const questionIDs = Object.keys(questions)
      const answeredIDs = Object.keys(users[authedUser].answers)
      const unanswered = questionIDs.filter((id) => {
        return !answeredIDs.includes(id)
      })
      return unanswered
    }

  }

  render () {
    const unanswered = this.filterQuestions()
    const { location } = this.props
    return (
      <div className='container'>
        <div className='row'>
         <Route exact path='/questions/:qid' component={Question} />
        </div>
        <div className='row'>
          <div className='question-container card-group col-10'>
            {unanswered && unanswered.length > 0
            ? unanswered.map((question) => (
              <QuestionCard key={question} qid={question} location={location} />
            ))
            : <NoQuestions />
            }
          </div>
        </div>
      </div>
      )
  }
}
const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    questions,
    users,
  }
}


export default connect(mapStateToProps)(QuestionPage)