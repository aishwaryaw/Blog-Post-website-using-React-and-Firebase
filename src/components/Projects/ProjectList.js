import React from 'react'
import ProjectSummary from '../Projects/ProjectSummary'
import { Link } from 'react-router-dom'

function ProjectList({projects, error}) {
   
 
        if(!projects){
            return <p>{error}</p>
         }
      return( <div className="container overflow-scroll">
             { 
                 projects && projects.map(project =>{
                           return (
                               <Link to={'/project/'+ project.id} key={project.id}>
                               <ProjectSummary  project={project}/>
                               </Link>
                              
                             )
                        })
                    }
        </div>
 )
    
}

export default ProjectList
