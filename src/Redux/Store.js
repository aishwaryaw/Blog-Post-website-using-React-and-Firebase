import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from '../Redux/Reducers/RootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from '../Config/fbConfig'


export default Store