import React, { Component } from 'react'
import { connect } from 'react-redux';

class Question extends Component {
  render () {
    const { authedUser, question } = this.props
    return (
      <div className='question text-center'>
          <h3>Would You Rather?</h3>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <p className='card-text'>{question.optionOne.text}</p>
                <button className='btn btn-primary'>Choose</button>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <p className='card-text'>{question.optionTwo.text}</p>
                <button className='btn btn-primary'>Choose</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question
  }
}

export default connect(mapStateToProps)(Question)