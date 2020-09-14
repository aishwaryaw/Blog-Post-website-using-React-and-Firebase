import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Signup} from '../../Redux/Actions/AuthActions'

class SignUp extends Component {
    state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.Signup(this.state);
    }

    render() {
      const { auth, authError } = this.props;
      if (auth.uid) return <Redirect to='/' /> 
      return (
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id='lastName' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
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
       
        console.log(state)
        return{
            authError :  state.auth.signupError,
            auth : state.firebase.auth
        }
    }
    
    const mapDispatchToProps = (dispatch) =>{
        
        return {
            Signup : (credentials) => dispatch(Signup(credentials))
        }
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
// function SignUp(props) {

//     const {authError, Signup , auth} = {...props}
    
//     const [state, setstate] = useState({
//         email : '',
//         password : '',
//         firstname : '',
//         lastname : ''
//     });

//    const changeHandler = (e) =>{

//         setstate({
//             ...state,
//             [e.target.name] : e.target.value
//         });

//     }
   
//     const submitHandler= (e)=>{
//         e.preventDefault();
//         Signup(state);
    
//     }

// if(auth.uid) return <Redirect to="/" />
 
//     return (
//         <div className="container">
//           <form className="white"  onSubmit={submitHandler}>
//               <h5 className="text-grey darken-4">Sign up</h5>

//               <div className="input-field">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" name="email" value={state.email} onChange={changeHandler}/>
//               </div>


//               <div className="input-field">
//               <label htmlFor="password">Password</label>
//               <input type="password" id="password" name="password" value={state.password} onChange={changeHandler}/>
//               </div>

//               <div className="input-field">
//               <label htmlFor="firstname">First name</label>
//               <input type="text" id="firstname" name="firstname" value={state.firstname} onChange={changeHandler}/>
//               </div>

//               <div className="input-field">
//               <label htmlFor="lastname">Lastname</label>
//               <input type="text" id="lastname" name="lastname" value={state.lastname} onChange={changeHandler} />
//               </div>

//               <div className="input-field">
//                   <button className="btn pink">Sign up</button>
//                   <div className="center red-text">
//                       { (authError) ? <h2>{authError}</h2> : null}
//                     </div>

//               </div>      
//           </form>

//             </div>
        
//     )
 
// }

// const mapStateToProps = (state)=>{
//     console.log(state)
//     return{
//         authError : state.auth.authError,
//         auth : state.firebase.auth
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
    
//     return {
//         Signup : (credentials) => dispatch(Signup(credentials))
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(SignUp)


