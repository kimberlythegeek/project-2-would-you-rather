import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions'
import { handleUserAnswers } from '../actions/users'
import { showLoading, hideLoading } from '../actions/loading'
import VoteButton from './VoteButton'
import QuestionResults from './QuestionResults'

class Question extends Component {

  closeModal = () => {
    this.props.history.push('/')
  }

  handleAnswer = (e) => {
    e.preventDefault()

    const { dispatch, questions, match } = this.props
    const question = questions[match.params.qid]
    const answer = e.target.name
    dispatch(showLoading())
    dispatch(handleSaveAnswer({
      qid: question.id,
      answer
    }))
    .then(() => dispatch(handleUserAnswers({
      qid: question.id,
      answer
    })))
    .then(() => dispatch(hideLoading()))
    // this.props.history.push('/')

  }

  render () {
    const { questions, match, users, authedUser } = this.props
    const user = users[authedUser]
    const question = questions[match.params.qid]
    const author = users[question.author]
    const answered = user.answers.hasOwnProperty(question.id)

    return  (
      <div className='question text-center question-modal'>
      <button type="button" class="close" aria-label="Close" onClick={this.closeModal}>
        <span aria-hidden="true">&times;</span>
      </button>
      <h3>Would You Rather?</h3>
        <div className='row'>
        <div className='col'>
          <img src={author.avatarURL} alt='' className='small-avatar'/>
          <p className='small'>asked by {author.name}</p>
        </div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body question-body'>
                <p className='card-text option-text'>{question.optionOne.text}</p>
                  { answered === false
                    ? <VoteButton handleAnswer={this.handleAnswer}/>
                    : <QuestionResults question={question} option={question.optionOne}/>
                  }
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body question-body'>
                <p className='card-text option-text'>{question.optionTwo.text}</p>
                  { answered === false
                    ? <VoteButton handleAnswer={this.handleAnswer}/>
                    : <QuestionResults question={question} option={question.optionTwo} />
                  }
              </div>
            </div>
          </div>
        </div>
    </div>
    )
    // return user.answers.hasOwnProperty(question.id)
    // ? <AnsweredQuestion question={question} />
    // : <UnansweredQuestion question={question} handleAnswer={this.handleAnswer} />
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questions,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Question)