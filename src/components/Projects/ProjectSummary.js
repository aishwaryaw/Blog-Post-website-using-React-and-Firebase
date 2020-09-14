import React from 'react'
import moment from 'moment'
function ProjectSummary({project}) {
    return (
      
    <div className="card z-depth-0 project-summary">
    <div className="card-content grey-background grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p>Posted by {project.authorFirstname} {project.authorLastname}</p>
      <p className="grey-text">{moment(project.created_at.toDate()).calendar()}</p>
    </div>
    </div>
        
    )
}



export default ProjectSummary
