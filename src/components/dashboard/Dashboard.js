import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Dashboard = (props) => {
  if (!props.uid) return (<Redirect to='/signin'/>)
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={props.projects}/>
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={props.notifications}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    projects: state.project,
    notifications: state.notification,
    uid: state.auth.uid
  }
}
export default connect(mapStateToProps)(Dashboard)