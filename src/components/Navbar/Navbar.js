import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from '../Navbar/SignInLinks'
import SignedOutLinks from '../Navbar/SignedOutLinks'
import { connect } from 'react-redux'

function Navbar({auth}) {

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
     
     <nav className="nav-wrapper grey darken-3">
      <div className="container">
          <div className="left">
          <Link to="/" className="brand-logo">Mario </Link>
          </div>
          {links}

          </div>
      
        </nav>
    )
}

const mapStateToProps = (state)=>{
  return{
      auth : state.firebase.auth
  }
}



export default connect(mapStateToProps)(Navbar)



