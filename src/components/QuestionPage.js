import React from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'
import NoQuestions from './NoQuestions'
import FilterButton from './FilterButton'

class QuestionPage extends React.Component {

  state = {
    filter: 'unanswered'
  }

  toggleFilter = () => {
    this.state.filter === 'unanswered'
    ? this.setState({filter: 'answered'})
    : this.setState({filter: 'unanswered'})
  }

  filterQuestions () {
    const { questions, authedUser, users } = this.props
    if(authedUser !== null) {
      const questionIDs = Object.keys(questions)
      const answeredIDs = Object.keys(users[authedUser].answers)
      const filteredQuestions = questionIDs.filter((id) => {
        return this.state.filter === 'unanswered'
        ? !answeredIDs.includes(id)
        : answeredIDs.includes(id)
      })
      return filteredQuestions
    }
  }

  render () {
    const unanswered = this.filterQuestions()
    const { filter } = this.state
    return (
      <div className='container'>
          <FilterButton toggleFilter={this.toggleFilter} filter={filter} />
        <div className='row'>
          <div className='question-container'>
            {unanswered && unanswered.length > 0
            ? unanswered.map((question) => (
              <QuestionCard key={question} qid={question} filter={filter} />
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