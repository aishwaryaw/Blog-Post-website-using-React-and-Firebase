import React , { Component } from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import ProjectList from '../Projects/ProjectList';
import { Redirect } from 'react-router-dom'
import {get_other_projects} from '../../Redux/Actions/ProjectActions'

class OtherProjects extends Component {
    render() {
      const { other_projects, auth , error} = this.props;
     
      if (!auth.uid) return <Redirect to="/signin" />
      if(other_projects){
      return (
        <div className="dashboard container">
          <div className="row">
              <h5>Other Projects</h5>
            <div className="overflow-scroll">
            <ProjectList projects = {other_projects} error = {error}/>
            </div>
           
          </div>
        </div>
      )
      }
    
      else{
        return (
          <div className="container">
            <p>Loading..</p>
          </div>
        )
      }
                
    }
  }
  
  const mapStateToProps = (state) => {
    console.log(state);
    return {
      //projects: state.firestore.ordered.projects,
      other_projects : state.projects.otherProjectList,
      error : state.projects.error,
      auth : state.firebase.auth
   
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return{
      get_projects : dispatch(get_other_projects())
    }
  }
  
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([ { collection: 'projects', orderBy: ['created_at', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}]),
    
  )(OtherProjects)
// function Dashboard({projects}) {
//     return (
//         <div>
           
//             <div className="container">
//                 <div className="row">
//                 <div className="col s12 m6">
//                     {
//                         projects.map(project =>{
//                            return (
//                                <div>
//                                 <h5>{project.title}</h5>
//                                 <p>{project.content}</p>
//                                 </div>
//                              )
//                         })
//                     }
//             </div>

//             <div className="col s12 m5 offset-m1">
//                 <Notifications />
//             </div>
//             </div>
//             </div>
//          </div>
      
//     )
// }

// const mapStateToProps = (state) =>{
//     console.log(state)
//     return {
//         projects : state.firestore.ordered.projects
//     }
// }


// export default compose(connect(mapStateToProps),
// firestoreConnect([
//    { collection : 'projects'}
// ])
// )(Dashboard)
