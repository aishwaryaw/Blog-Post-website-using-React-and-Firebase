const initialstate = {
    myProjectList : [],
    otherProjectList : [],
    error : 'Project list is empty'
    
}

const ProjectReducer = (state = initialstate, action )=>{
    switch(action.type){
        case 'CREATE_PROJECT_SUCCESS':
            console.log('project created')
            return state
            
        case 'CREATE_PROJECT_ERROR':
            console.log('error in project creation', action.error)
            return state

        case 'GET_MY_PROJECTS_SUCCESS':
            return {
                ...state,
                myProjectList: action.projects
            }
        case 'GET_MY_PROJECT_ERROR':
           console.log('error', action.error.message)
            
        case 'GET_MY_PROJECT_EMPTY':
            return{
                ...state,
                error : 'Project list is empty'
            }

        case 'GET_OTHER_PROJECTS_SUCCESS':
            console.log('success')
                return {
                    ...state,
                   otherProjectList: action.projects
                }

        case 'GET_OTHER_PROJECT_ERROR':
               console.log('error', action.error.message)
             
               
        case 'GET_OTHER_PROJECT_EMPTY':
                return{
                    ...state,
                    error : 'Project list is empty'
                }

        default:
                return state;
    }
   
}

export default ProjectReducer