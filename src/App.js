import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route , Switch } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard/Dashboard';
import ProjectDetails from '../src/components/Projects/ProjectDetails'
import CreateProject from '../src/components/Projects/CreateProject'
import SignIn from '../src/components/Auth/SignIn'
import SignUp from '../src/components/Auth/SignUp'
import Navbar from '../src/components/Navbar/Navbar'
import OtherProjects from './components/Projects/OtherProjects';
import { BrowserRouter} from 'react-router-dom';
import AddComment from '../src/components/Comments/AddComment'

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <Navbar />
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/CreateProject" component={CreateProject} />
        <Route exact path="/project/:id" component={ProjectDetails} />
        <Route exact path="/AddComment/:id" component={AddComment} />
        <Route exact path="/other" component={OtherProjects} />
        <Route exact path="/Signin" component={SignIn} />
        <Route exact path="/Signup" component={SignUp} />
        </Switch>
    
    </div>
    </BrowserRouter>
   
 
  );
}

export default App;
