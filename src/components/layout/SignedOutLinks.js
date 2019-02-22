import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <li><a href="#register">Register</a></li>
      <li><a href="#login">Log In</a></li>
    </React.Fragment>
  )
}

export default SignedOutLinks