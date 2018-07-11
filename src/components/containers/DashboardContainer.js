import { connect } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'
import Dashboard from '../Dashboard'

const mapStateToProps = ({ authedUser, questions }) => {
  return {
    authedUser,
    questionIds: Object.keys(questions)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => {
      dispatch(setAuthedUser(null))
    }
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default DashboardContainer