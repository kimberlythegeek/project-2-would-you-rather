import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './Header'
import LoginPage from './LoginPage'
import Dashboard from './Dashboard'
import LoadingPage from './LoadingPage'
import Question from './Question'

class App extends Component {
  componentDidMount() {
    const { users, questions } = this.props
    console.log('app props',this.props)
    if (users.length === 0 && questions.length === 0) {
      this.props.dispatch(handleInitialData())
    }
  }
  render() {
    const { authedUser, loading } = this.props
    return (
      <div className='App'>
        <Route path='/' component={Dashboard} />
        <Route exact path='/questions/:qid' component={Question} />
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, loading, users, questions }) => {
  return {
    authedUser,
    loading,
    users: Object.keys(users),
    questions: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(App)
