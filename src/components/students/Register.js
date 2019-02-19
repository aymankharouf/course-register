import React from 'react'
import { register } from '../../store/actions/studentActions'
import { connect } from 'react-redux'


class Register extends React.Component {
  state = {
    name: '',
    email: '',
    mobile: '',
    time: '',
    note: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.register(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <i className="material-icons prefix">perm_identity</i>
            <input type="text" id="name" onChange={this.handleChange}></input>
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="email" id="email" className="validate" onChange={this.handleChange}></input>
            <label htmlFor="email">Your email</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">phone</i>
            <input type="text" id="mobile" className="validate" onChange={this.handleChange}></input>
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
          <div className="input-field right">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapActionsToProps = (dispatch) => {
  return {
    register: (student) => dispatch(register(student))
  }
}

export default connect(null, mapActionsToProps)(Register)