import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = props => {
  const links = props.uid ? <SignedInLinks/> : <SignedOutLinks/>
  return (
    <nav className="nav-wrapper cyan lighten-3">
      <div className="container">
        <Link to='/' className="brand-logo">React Course</Link>
        <a href="#" className="sidenav-trigger" data-target="mobile-menu"> 
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          { links }
        </ul>
        <ul className="sidenav" id="mobile-menu"> 
          { links }
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
export default connect(mapStateToProps)(Navbar)