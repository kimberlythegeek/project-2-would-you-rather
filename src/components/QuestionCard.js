import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class QuestionCard extends React.Component {
  clicked = (e) => {
    console.log('props', this.props)
    console.log(`/questions/${this.props.qid}`)
    
  }

  render() {
    const { users, questions, qid } = this.props
    const question = questions[qid]
    const user = users[question.author]
    return (
        <div className='card'>
          <img className='card-img-top' src={`${user.avatarURL}`} alt='author profile avatar'/>
          <div className='card-body'>
            <h5 className='card-title'>Would You Rather...</h5>
            <p className='card-text'>
              {`${question.optionOne.text} or ${question.optionTwo.text}?`}
            </p>
            <Link to={`/questions/${qid}`} onClick={this.clicked} >
              Vote
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