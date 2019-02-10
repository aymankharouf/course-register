import React from 'react'
import ProjectSummary from './ProjectSummary'
import { connect } from 'react-redux'
import { getProjects } from '../../store/actions/projectActions'

class ProjectList extends React.Component {
  componentDidMount() {
    if (!this.props.projects.length) {
      this.props.getProjects()
    }
  }
  render() {
    const projectsList = this.props.projects.map(project => <ProjectSummary project={project} key={project.id}/>)
    return (
      <div className="project-list section">
        {projectsList}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    projects: state.project
  }
}
const mapActionsToProps = dispatch => {
  return {
    getProjects: () => dispatch(getProjects())
  }
}
export default connect(mapStateToProps, mapActionsToProps)(ProjectList)