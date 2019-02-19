import React from 'react'
import { login } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.login(this.state)
  }
  render() {
    if (this.props.uid) return (<Redirect to='/dashboard'/>)
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Login</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="center red-text">
              { this.props.authError ? <p>{this.props.authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid,
    authError: state.auth.authError
  }
}
const mapActionsToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  }
}
export default connect(mapStateToProps, mapActionsToProps)(Login)