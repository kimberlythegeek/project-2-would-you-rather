import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { handleSaveAnswer } from '../actions/questions'
import { handleUserAnswers } from '../actions/users'
import { showLoading, hideLoading } from '../actions/loading'
import { withRouter } from 'react-router'

class Question extends Component {
  state = {
    toDashboard: false
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
    this.props.history.push('/')

  }

  render () {
    const { questions, match } = this.props
    const question = questions[match.params.qid]
    return (
       <div className='question text-center col-10'>
          <h3>Would You Rather?</h3>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='card'>
                  <div className='card-body'>
                    <p className='card-text'>{question.optionOne.text}</p>
                    <button
                      name='optionOne'
                      className='btn btn-primary'
                      onClick={this.handleAnswer}
                    >Choose</button>
                  </div>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='card'>
                  <div className='card-body'>
                    <p className='card-text'>{question.optionTwo.text}</p>
                    <button
                      name='optionTwo'
                      className='btn btn-primary'
                      onClick={this.handleAnswer}
                    >Choose</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(Question)