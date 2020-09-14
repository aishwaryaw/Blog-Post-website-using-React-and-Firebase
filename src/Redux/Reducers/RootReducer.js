import {combineReducers} from 'redux'
import ProjectReducer from './ProjectReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import AuthReducer from './AuthReducer'
import CommentReducer from './CommentReducer'

const RootReducer = combineReducers({
    projects : ProjectReducer,
    comments : CommentReducer,
    auth : AuthReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default RootReducer