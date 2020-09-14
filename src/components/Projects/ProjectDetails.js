import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect, Link } from 'react-router-dom'
import moment from 'moment'
import Comments from '../Comments/Comments';

function ProjectDetails(props) {
    const {project , auth, id } = props 
    if (!auth.uid) return <Redirect to="/signin" />

    if(project){

    return (
         <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstname} {project.authorLastname}</div>
            <div>{moment(project.created_at.toDate()).calendar()}</div>
          </div>
          {auth.uid !== project.authorId ? <button><Link to={"/addComment/"+ id}>Add comment</Link></button> : null}
        </div>
        <Comments id = {id} />
      </div>
            
    
    )
    }

    else{
        return (
        <div className="container">
            <p>Loading project...</p>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{

    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
  

    return{
        id : id,
        project : project, 
        auth : state.firebase.auth

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'projects'
    }])
  )(ProjectDetails)
