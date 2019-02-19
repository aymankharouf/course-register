import React from 'react'
import moment from 'moment'

const StudentSummary = (props) => {
  return (
    <div className="card z-depth-0 student-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.student.mobile}</span>
        <p>Posted By {props.student.email} {props.student.name}</p>
        <p className="grey-text">{moment(props.student.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default StudentSummary