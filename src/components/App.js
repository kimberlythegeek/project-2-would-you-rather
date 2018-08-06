import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import Dashboard from './Dashboard'
import LoadingPage from './LoadingPage'
import Question from './Question'

class App extends Component {
  state = {
    showOverlay: false
  }

  componentDidMount() {
    const { users, questions } = this.props
    console.log('app props',this.props)
    if (users.length === 0 && questions.length === 0) {
      this.props.dispatch(handleInitialData())
    }
  }

  toggleOverlay() {
    this.setState({ showOverlay: !this.state.showOverlay})
  }
  render() {
    const { authedUser, loading } = this.props
    return (
    <BrowserRouter>
    <div className='App'>
        { loading === true
          ? <LoadingPage />
          : ( authedUser === null
              ? <Route path='*' component={LoginPage} />
              :
              <div>
                <Route path='/' component={Dashboard} />
                <Route exact path='/questions/:qid' component={Question} />
                <Route path='/questions/' render={() => (<div className='modal-overlay'></div>)} />
              </div>
          )
        }
      </div>
    </BrowserRouter>
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
