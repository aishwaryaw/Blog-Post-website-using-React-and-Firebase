import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Signin} from '../../Redux/Actions/AuthActions'
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
      email: '',
      password: ''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.Signin(this.state)
    }
    render() {
      const { authError, auth } = this.props;
      if (auth.uid) return <Redirect to='/' /> 
      return (
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Login</button>
              <div className="center red-text">
                { authError ? <p>{authError}</p> : null }
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state)=>{
    const authError =  null;
    return{
        authError : state.auth.signError,
        auth : state.firebase.auth
        }
    }
    
    const mapDispatchToProps = (dispatch) =>{
        return {
            Signin : (credentials) => dispatch(Signin(credentials))
        }
    }

  export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


// import React,  {useState}  from 'react'
// import {connect} from 'react-redux'
// import {Signin} from '../../Redux/Actions/AuthActions'
// import { Redirect } from 'react-router-dom';

// function SignIn({Signin , authError , auth}) {

//     const [state, setstate] = useState({
//         email : '',
//         password : ''
//     });

  
//    const changeHandler = (e) =>{

//         setstate({
//             ...state,
//             [e.target.name] : e.target.value
//         });

//     }

//     const submitHandler= (e)=>{
//         e.preventDefault();
//         Signin(state);

//     }

// if(auth.uid)
//     return <Redirect to="/" />
//     return (

//         <div className="container">
//           <form className="white" onSubmit={submitHandler}>
//               <h5 className="text-grey darken-4">Sign in</h5>
//               <div className="input-field">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" name="email" value={state.email} onChange={changeHandler} />
//               </div>


//               <div className="input-field">
//               <label htmlFor="password">Password</label>
//               <input type="password" id="password" name="password" value={state.password} onChange={changeHandler}/>
//               </div>

//               <div className="input-field">
//                   <button className="btn pink">Login</button>
//                   <div className="center red-text">
//                       {authError ? <p>{authError}</p> : null}
//                     </div>

//               </div>    
              
//           </form>

//             </div>   
//     )
    
// }

// const mapStateToProps = (state)=>{
//     return{
//         authError : state.auth.authError || null,
//         auth : state.firebase.auth
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         Signin : (credentials) => dispatch(Signin(credentials))
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
