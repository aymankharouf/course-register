import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li><a href="" onClick={props.logout}>Log Out</a></li>
      <li><NavLink to='/' className="btn btn-floating pink lighten-1">{ props.initials }</NavLink></li>
    </ul>
  )
}
const mapStateToProps = (state) => {
  return {
    initials: state.auth.initials
  }
}
const mapActionsToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapActionsToProps)(SignedInLinks)