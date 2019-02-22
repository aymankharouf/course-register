import React from 'react'
import { register } from '../../store/actions/studentActions'
import { connect } from 'react-redux'
import Recaptcha from 'react-recaptcha'
import M from 'materialize-css'

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    mobile: '07',
    time: '',
    note: ''
  }
  patterns = {
    name: /^[a-zA-Z]{3,20} [a-zA-Z]{3,20}$/,
    mobile: /^07[7-9][0-9]{7}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  }
  validate = (field, pattern) => {
    if (!pattern || pattern.test(field.value)){
      field.className = 'valid'
    } else {
      field.className = 'invalid'
    }
    this.isFormValid()
  }
  isFormValid = () => {
    if (this.refs.name.className == 'valid' 
        && this.refs.email.className == 'valid'
        && this.refs.mobile.className == 'valid'
        && this.refs.recaptcha.className == 'valid') this.refs.submit.disabled = false
    else this.refs.submit.disabled = true
  }
  
  RecaptchaLoaded = () => {
    console.log('the recaptcha is loaded')
  }
  verifyCallback = (response) => {
    this.refs.recaptcha.className = 'valid'
    this.isFormValid()
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
    this.validate(e.target, this.patterns[e.target.attributes.id.value])
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.register(this.state)
    this.refs.recaptcha.reset()
    this.setState({
      name: '',
      email: '',
      mobile: '07',
      time: '',
      note: ''
    })
    this.refs.form.reset()
    M.toast({html: 'You have registered successfully!'})
  }
  render() {
    return (
      <div className="container">
        <form ref="form" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <i className="material-icons prefix">perm_identity</i>
            <input type="text" id="name" ref="name" className="validate" onChange={this.handleChange}></input>
            <span className="helper-text" data-error="wrong" data-success="right">your first and last name</span>
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="email" id="email" ref="email" className="validate" onChange={this.handleChange}></input>
            <span className="helper-text" data-error="wrong" data-success="right">your valid email</span>
            <label htmlFor="email">Your email</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">phone</i>
            <input type="text" id="mobile" ref="mobile" className="validate" value={this.state.mobile} onChange={this.handleChange}></input>
            <span className="helper-text" data-error="wrong" data-success="right">you mobile number</span>
            <label htmlFor="mobile">Your mobile</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">schedule</i>
            <select id="time" defaultValue="" onChange={this.handleChange}>
              <option value="" disabled>Preferred time (UTC+03:00 Mddile East)</option>
              <option value="1">10 a.m - 12 p.m</option>
              <option value="2">4 p.m - 6 p.m</option>
              <option value="3">7 p.m - 9 p.m</option>
              <option value="4">Any Time</option>
            </select>
            <label htmlFor="time">Preferred Time</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">message</i>
            <textarea id="note" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="note">Note</label>
          </div>
          <Recaptcha
            sitekey="6LfxKpMUAAAAAProrBi3LIKzXAGI2E0iWjBWqJfu"
            render="explicit"
            verifyCallback={this.verifyCallback}
            onloadCallback={this.RecaptchaLoaded}
            ref="recaptcha"
          />
          <div className="input-field">
            <div className="center red-text">
              { this.props.error ? <p>{this.props.error}</p> : null }
            </div>
            <button className="btn right waves-effect waves-light" type="submit" ref="submit" disabled={true}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    error: state.student.error
  }
}
const mapActionsToProps = dispatch => {
  return {
    register: student => dispatch(register(student))
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Register)