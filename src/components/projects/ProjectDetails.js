import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const ProjectDetails = (props) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{props.project[0] && props.project[0].title}</span>
          <p>{props.project[0] && props.project[0].content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By {props.project[0].authorFirstName} {props.project[0].authorLastName}</div>
          <div>{moment(props.project[0].createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  return {
    project: state.project.filter(project => project.id === id)
  }
}

export default connect(mapStateToProps)(ProjectDetails)