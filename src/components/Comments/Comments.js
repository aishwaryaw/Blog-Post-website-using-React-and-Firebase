import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {get_comments} from '../../Redux/Actions/CommentAction'
import moment from 'moment'

function Comments(props) {

    const {comments, get_comments, error} = props;

    useEffect(()=>  {
        // console.log(error)
        get_comments(props.id)
      
    }, [props.id])

    if(error)
    return <p>{error}</p>

        if(comments){      
            return (
                 <div className="container section comment-details">
                    {
                  comments && comments.map((comment)=>{
                      return (
                    <div className="card z-depth-0">
                    <div className="card-content"><p>{comment.comment}</p> </div>
                    <div className="grey lighten-4 grey-text"><p className="black-text">Posted by {comment.author}</p> {moment(comment.date.toDate()).fromNow()}
                    </div>
                    </div>

                      )
                  })
                }
             </div>
             )
         
        }
    

        else {
            return <p>loading...</p>
        }
     }

const mapStateToProps = (state)=>{

    
        let comments = state.comments.commentList;
     
        comments = comments.sort(function(a, b) {
            var c = a.date;
            var d = b.date;
            return d-c;
        }); //sorting dates

        // console.log(comments)
        
        return {
        error : state.comments.error,
  
        comments : comments
    
    }
}

const mapDispatchToProps = (dispatch)=>{
   
    return {
        get_comments : (id) => dispatch(get_comments(id)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments)
