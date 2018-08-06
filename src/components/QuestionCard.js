import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionCard extends React.Component {

  render() {
    const { users, questions, qid, filter } = this.props
    const question = questions[qid]
    const user = users[question.author]
    return (
        <div className='card question-card'>
          <img className='card-img-top' src={`${user.avatarURL}`} alt='author profile avatar'/>
          <div className='card-body'>
            <div className='small'>asked by {user.name}</div><br/>
            <h5 className='card-title'>Would You Rather...</h5>
            <p className='card-text'>
              {`${question.optionOne.text} or ${question.optionTwo.text}?`}
            </p>
              <Link to={`/questions/${qid}`}>
                <button className='btn btn-primary'>
                  { filter === 'unanswered'
                  ? 'Vote'
                  : 'See Results'
                  }
                </button>
              </Link>
          </div>
        </div>
    )
  }
}

const  mapStateToProps = ({ users, questions }) => {
  return {
    users,
    questions
  }
}

export default connect(mapStateToProps)(QuestionCard)