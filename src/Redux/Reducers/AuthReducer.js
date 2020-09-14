const initialstate = {
    signError : null,
    signupError : null
}

const AuthReducer = (state = initialstate, action )=>{
    console.log('hi')
    
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                signError : null,
                signupError: null
            }
            
        case 'LOGIN_ERROR':
            console.log('error in login')
            return {
                ...state,
                signError : 'Login error',
                signupError : null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signout suucess')
            return state

        case 'SIGNUP_SUCCESS':
                console.log('login success')
                return {
                    ...state,
                    signupError : null,
                    signError : null
                }
                
        case 'SIGNUP_ERROR':
                console.log('error in login')
                return {
                    ...state,
                    signupError : action.err.message,
                    signError : null
                }
           
        default:
                
                 return {
                     ...state,
                     authError:null
                    } 
            
}
}

export default AuthReducer