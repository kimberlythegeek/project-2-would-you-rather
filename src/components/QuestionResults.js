import React, { Component } from 'react'

class QuestionResults extends Component {
  render() {
    const { question, option } = this.props
    const optionOne = question.optionOne
    const optionTwo = question.optionTwo
    const totalAnswers = optionOne.votes.length + optionTwo.votes.length

    return (
      <div>
        <p className='card-text'>Votes: {option.votes.length}</p>
        <p className='card-text'>{parseInt(option.votes.length / totalAnswers * 100, 10)}%</p>
      </div>
    )
  }
}

export default QuestionResults