import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'

const Navbar = props => {
  return (
    <nav className="nav-wrapper cyan lighten-3">
      <div className="container">
        <Link to='/' className="brand-logo">React Course</Link>
        <a href="#!" className="sidenav-trigger" data-target="mobile-menu"> 
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          {props.uid ? '' : <li><a href="#register">Register</a></li>}
          {props.uid ? '' : <li><a href="#!" data-target="loginModal" className="modal-trigger">Log In</a></li>}
          {props.uid ? <li><a href="#!" onClick={props.logout}>Log Out</a></li> : ''}
        </ul>
        <ul className="sidenav" id="mobile-menu"> 
          {props.uid ? '' : <li><a href="#register">Register</a></li>}
          {props.uid ? '' : <li><a href="#!" data-target="loginModal" className="modal-trigger">Log In</a></li>}
          {props.uid ? <li><a href="#!" onClick={props.logout}>Log Out</a></li> : ''}
        </ul>
      </div>
    </nav>
  )

}
const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid
  }
}
const mapActionsToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}
export default connect(mapStateToProps, mapActionsToProps)(Navbar)