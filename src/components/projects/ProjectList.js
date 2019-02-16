import React from 'react'
import ProjectSummary from './ProjectSummary'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ProjectList = (props) => {
  const projectsList = props.projects.map(project => {
    return (
      <Link to={'/project/' + project.id} key={project.id}>
        <ProjectSummary project={project}/>)
      </Link>
    )})
  return (
    <div className="project-list section">
      {projectsList}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    projects: state.project,
  }
}

export default connect(mapStateToProps)(ProjectList)