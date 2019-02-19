import React from 'react'
import Notifications from './Notifications'
import StudentList from '../students/StudentList'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Dashboard = (props) => {
  if (!props.uid) return (<Redirect to='/signin'/>)
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <StudentList students={props.students}/>
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={props.notifications}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    students: state.student,
    notifications: state.notification,
    uid: state.auth.uid
  }
}
export default connect(mapStateToProps)(Dashboard)