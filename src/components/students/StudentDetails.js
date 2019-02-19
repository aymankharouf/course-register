import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const StudentDetails = (props) => {
  return (
    <div className="container section student-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{props.student[0] && props.student[0].mobile}</span>
          <p>{props.student[0] && props.student[0].name}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By {props.student[0].email} </div>
          <div>{moment(props.student[0].createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  return {
    student: state.student.filter(student => student.id === id)
  }
}

export default connect(mapStateToProps)(StudentDetails)