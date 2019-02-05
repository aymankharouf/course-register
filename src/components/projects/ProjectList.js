import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {
  const projectsList = projects.map(project => <ProjectSummary project={project} key={project.id}/>)
  return (
    <div className="project-list section">
      {projectsList}
    </div>
  )
}

export default ProjectList