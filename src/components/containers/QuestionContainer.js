import React from 'react'
import { connect } from 'react-redux'
import Question from '../Question'

class QuestionContainer extends React.Component {
  unansweredQuestions = () => {
    // To Do
    // Return unanswered question
    // Based on value of authedUser
  }

  answeredQuestions =  () => {
    // To Do
    // Return answered question
    // Based on value of authedUser
    // Hide unless showAnsweredQuestions is true
  }

  answeredQuestionsList = () => {

  }

  unansweredQuestionsList = () => {

  }

  filterQuestions () {
    const { questions, answeredIDs } = this.props
    const questionIDs = Object.keys(questions)
    const unanswered = questionIDs.filter((id) => {
      return !answeredIDs.includes(id)
    })
    return <Question id={unanswered[0]} />
  }

  render () {
    const { authedUser, questions, questionIds } = this.props
    return (
      <div className='question-container'>
      {/* {questionIds.map((id) => (
        <Question id={id} />
      ))} */}
      {this.filterQuestions()}
      </div>
    )
  }
}
const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    questions,
    answeredIDs: Object.keys(users[authedUser].answers)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // To Do
    // Add Event Handlers for answering questions
  }
}


export default connect(
  mapStateToProps
)(QuestionContainer)