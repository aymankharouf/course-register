import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

const StudentSummary = props => {
  const preferredTime = props.student.time ? props.times.find(time => time.id == props.student.time).desc : ''
  return (
    <div className="card z-depth-0 light-blue lighten-4">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.student.name}</span>
        <p>mobile: {props.student.mobile}</p>
        <p>email: {props.student.email}</p>
        <p>preferred time: {preferredTime}</p>
        <p>notes: {props.student.note}</p>
        <p className="grey-text">{moment(props.student.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    times: state.times
  }
}

export default connect(mapStateToProps)(StudentSummary)

