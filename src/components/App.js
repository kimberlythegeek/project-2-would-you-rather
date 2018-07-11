import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import DashboardContainer from './containers/DashboardContainer'
import LoadingPage from './LoadingPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
   const { authedUser, loading } = this.props
    return (
      <div className='App'>
      {/* <Route path='*' component={LoadingPage} /> */}
        { loading === true
          ? <Route path='*' component={LoadingPage} />
          : ( authedUser === null
              ? <Route path='*' component={LoginPage} />
              : <Route exact path='/' component={DashboardContainer} />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, loading }) => {
  return {
    authedUser,
    loading
  }
}

export default connect(mapStateToProps)(App)
