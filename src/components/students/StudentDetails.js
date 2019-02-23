import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const StudentDetails = props => {
  if (!props.student) return <p>No student info available</p>
  const preferredTime = props.student.time ? props.times.find(time => time.id == props.student.time).desc : ''
  return (
    <div className="container section ">
      <div className="card z-depth-0 light-blue lighten-4">
        <div className="card-content">
          <span className="card-title">{props.student.name}</span>
          <p>mobile: {props.student.mobile}</p>
          <p>email: {props.student.email}</p>
          <p>preferred time: {preferredTime}</p>
          <p>notes: {props.student.note}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>{moment(props.student.createdAt.toDate()).calendar()}</div>
        </div>
        <Link to='/dashboard' className="btn-floating halfway-fab light-blue lighten-4"><i className="material-icons black-text">arrow_forward_ios</i></Link>
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  return {
    student: state.student.find(student => student.id === id),
    times: state.times
  }
}

export default connect(mapStateToProps)(StudentDetails)