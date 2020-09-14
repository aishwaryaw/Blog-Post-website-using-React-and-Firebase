const get_my_projects = () =>{

    return (dispatch, getState , {getFirestore}) =>{
    const firestore = getFirestore();
    const currentUser = getState().firebase.auth.uid;
    if(currentUser){
    firestore.collection('projects').where('authorId','==',currentUser)
    .get()
    .then(snapshot => {
    
        let projects = [];
        snapshot.forEach(doc => {
            console.log(doc.id)
            let project = {...doc.data() , id : doc.id}
            projects.push(project)
            //console.log(myprojects)
          });
        
        dispatch({type : 'GET_MY_PROJECTS_SUCCESS', projects:projects})

        if (snapshot.empty) {
            dispatch({type : 'GET_MY_PROJECTS_EMPTY'})
          
        }  
    
    })
    .catch(error=>{
        dispatch({type : 'GET_MY_PROJECTS_ERROR', error})
    })
    }
}
}

const get_other_projects = () =>{

    return (dispatch, getState , {getFirestore}) =>{
    const firestore = getFirestore();
    const currentUser = getState().firebase.auth.uid;

    firestore.collection('projects').get()
    .then(snapshot => {
    
        let projects = [];
        snapshot.forEach(doc => {
            if(doc.data().authorId !== currentUser)
            {
            console.log(doc.id)
            let project = {...doc.data() , id : doc.id}
            console.log(project)
            projects.push(project)
            }
           
          });
        
        dispatch({type : 'GET_OTHER_PROJECTS_SUCCESS', projects:projects})

        if (snapshot.empty) {
            dispatch({type : 'GET_OTHER_PROJECTS_EMPTY'})
          
        }  
    
    })
    .catch(error=>{
        dispatch({type : 'GET_OTHER_PROJECTS_ERROR', error})
    })
    }
}


const create_project = (project)=>{
    return (dispatch, getState , {getFirestore}) =>{
        
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstname : profile.firstname,
            authorLastname : profile.lastname,
            authorId : authorId,
            created_at : new Date()
        }).then(() => {
                dispatch({type : 'CREATE_PROJECT_SUCCESS'})
            }
        ).catch(error=>{
            dispatch({type : 'CREATE_PROJECT_ERROR', error : error})
        })

    }
}


export {create_project , get_my_projects, get_other_projects}