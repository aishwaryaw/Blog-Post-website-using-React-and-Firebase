const initialstate = {
   
    error : null,
    commentList : []
    
}

const CommentReducer = (state = initialstate, action )=>{

    switch(action.type){
        case 'ADD_COMMENT_SUCCESS':
            console.log('comment created')
            return state
            
        case 'ADD_COMMENT_ERROR':
            console.log('error in comment creation', action.error.message)
            return state

        case 'GET_MY_COMMENTS_SUCCESS':
            return{
                ...state,
                commentList:action.comments,
                error : null
            }

        case 'GET_MY_COMMENTS_EMPTY':
            return{
                ...state,
                error: action.error
            }

        case 'GET_MY_COMMENTS_ERROR':
            return{
                ...state,
                error : action.error.message
            }


        default:
                return state;
    }
   
}

export default CommentReducer