import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <React.Fragment>
      <li><a href="#" onClick={props.logout}>Log Out</a></li>
    </React.Fragment>
  )
}
const mapActionsToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapActionsToProps)(SignedInLinks)