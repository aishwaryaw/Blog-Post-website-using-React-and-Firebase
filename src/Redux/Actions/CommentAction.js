import { getFirebase } from "react-redux-firebase";

const add_comment = (comment) =>{
    return (dispatch , getState, {getFirestore, geteFirebase}) =>{
        const firestore = getFirestore();
       // const firebase = getFirebase();
        const id = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        const authorname = `${profile.firstname} ${profile.lastname}`

        firestore.collection('comments').add({
            comment : comment.comment,
            projectid : comment.projectid,
            author : authorname,
            authorid : id,
            date : new Date()
        })
        .then(()=>{
            dispatch({type: 'ADD_COMMENT_SUCCESS'})
        }).catch((error)=>{
            dispatch({type : 'ADD_COMMENT_ERROR', error})
        })
    }
}

const get_comments = (id) =>{

    return (dispatch, getState , {getFirestore}) =>{
    const firestore = getFirestore();

    firestore.collection('comments').where('projectid','==',id )
    .get()
    .then(snapshot => {
    
        let comments = [];
        snapshot.forEach(doc => {
            let comment = {...doc.data()}
            comments.push(comment)
            console.log('comment',comment)
            //console.log(myprojects)
          });
        
        dispatch({type : 'GET_MY_COMMENTS_SUCCESS', comments:comments})

        if (snapshot.empty) {
            dispatch({type : 'GET_MY_COMMENTS_EMPTY', error:'No comments'})
          
        }  
    
    })
    .catch((error)=>{
        dispatch({type : 'GET_MY_COMMENTS_ERROR', error})
    })
    }
}

export {add_comment, get_comments}