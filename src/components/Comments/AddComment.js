import React, {useState} from 'react'
import { connect } from 'react-redux';
import {add_comment} from '../../Redux/Actions/CommentAction'
import {Redirect} from 'react-router-dom'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function AddComment(props) {
  
    const { add_comment, auth, project } = props;
    const projectid = props.match.params.id;

    const [state, setstate] = useState({
        comment : '',
    });

   const changeHandler = (e) =>{

        setstate({
            ...state,
            [e.target.name] : e.target.value
        });

    }

    const submitHandler= (e)=>
    {
        e.preventDefault();
        add_comment({...state, projectid} );
        props.history.push('/other');


    }

    if (!auth.uid) return <Redirect to="/signin" />

    else{
    if(project)
    {
    if(project.authorId === auth.uid )
    return <Redirect to="/" />
    }
    }
    return (
        
        <div className="container">
          <form className="white" onSubmit={submitHandler}>
              <h5 className="text-grey darken-4">Add Comment</h5>

              <div className="input-field">
              <label htmlFor="title">Comment</label>
              <input type="text" id="comment" name="comment" value={state.comment} onChange={changeHandler} />
              </div>

              <div className="input-field">
                  <button className="btn pink">Add comment </button>

              </div>    
              
          </form>

            </div>
            
       
    )
}

const mapStateToProps = (state, ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    console.log(project)
  
    return {
        auth : state.firebase.auth,
        project : project
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        add_comment : (comment)=>dispatch(add_comment(comment))
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([{
      collection: 'projects'
    }])
  )(AddComment)

