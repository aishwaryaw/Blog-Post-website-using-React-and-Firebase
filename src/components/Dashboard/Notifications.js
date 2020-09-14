import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

function Notifications({notifications}) {

    if(!notifications){
        return <p>no notification</p>
    }

    return (       
    <div className="card z-depth-0 project-summary">

<h5>My Notifications</h5>
            <div className="section">
           <div className="card z-depth-0">
             <div className="card-content">
               <span className="card-title">Notifications</span>
               <ul className="online-users">
                 { notifications && notifications.map(item =>{
                   return <div>
                  
                   <li key={item.id}>
                     <span className="pink-text">{item.user} </span>
                     <span>{item.content}</span>
                     <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
                   </li>
                   </div>
                 })}
               </ul>
             </div>
           </div>
         </div>
         </div>
           
        )
}
const mapStateToProps = (state)=>{
    return {
        notifications : state.firestore.ordered.notifications 
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection:'notifications', limit:6, orderBy:['time', 'desc']}]),
    
  )(Notifications)

