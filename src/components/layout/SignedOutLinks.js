import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <li><a href="#register">Register</a></li>
      <li><NavLink to='/login'>Log In</NavLink></li>
    </React.Fragment>
  )
}

export default SignedOutLinks