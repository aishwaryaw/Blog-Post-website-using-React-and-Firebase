import React from 'react'
import {Link , NavLink} from 'react-router-dom'
import {Signout} from '../../Redux/Actions/AuthActions'
import {connect} from 'react-redux'

function SignInLinks({Signout, profile}) {
    return (
        <div>
            <ul className="right">
                <li><Link to="/other">Other Projects</Link></li>
                <li><Link to="/CreateProject">New Project</Link></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">
                {profile.initials}
                </NavLink></li>
                <li><Link onClick={Signout}>Logout</Link></li>
            </ul>
                  
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        profile : state.firebase.profile
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        Signout : () => dispatch(Signout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks)
