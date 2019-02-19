import React from 'react'
import StudentSummary from './StudentSummary'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const StudentList = (props) => {
  const studentsList = props.students.map(student => {
    return (
      <Link to={'/student/' + student.id} key={student.id}>
        <StudentSummary student={student}/>
      </Link>
    )})
  return (
    <div className="student-list section">
      {studentsList}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    students: state.student,
  }
}

export default connect(mapStateToProps)(StudentList)