import React,  {useState} from 'react'
import {create_project} from '../../Redux/Actions/ProjectActions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

function CreateProject(props) {

    const { createProject, auth } = props;

    const [state, setstate] = useState({
        title : '',
        content : ''
    });

   const changeHandler = (e) =>{

        setstate({
            ...state,
            [e.target.name] : e.target.value
        });

    }

    const submitHandler= (e)=>{
        e.preventDefault();
        createProject(state);
        props.history.push('/');

    }

    if (!auth.uid) return <Redirect to="/signin" />
    return (
        
        <div className="container">
          <form className="white" onSubmit={submitHandler}>
              <h5 className="text-grey darken-4">Create Project</h5>

              <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" value={state.title} onChange={changeHandler} />
              </div>


              <div className="input-field">
              <label htmlFor="Content">Content</label>
              <input type="text" id="content" name="content" value={state.content} onChange={changeHandler} />
              </div>


              <div className="input-field">
                  <button className="btn pink">Create Project</button>

              </div>    
              
          </form>

            </div>
            
       
    )
}
const mapStateToProps = (state)=>{
  
    return{
      
        auth : state.firebase.auth

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createProject : (project) => dispatch(create_project(project))
    }
}



   

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
