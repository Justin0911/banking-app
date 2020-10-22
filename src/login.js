// Importing all required styling/css assets from the assets folder in the project directory, including all modules needed, as well as images used.
import React, { Component } from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fonts/font-awesome.min.css';
import './assets/fonts/ionicons.min.css';
import './assets/fonts/material-icons.min.css';
import './assets/fonts/simple-line-icons.min.css';
import './assets/css/Article-Clean.css';
import './assets/css/Article-List.css';
import './assets/css/Contact-Form-Clean.css';
import './assets/css/Features-Blue.css';
import './assets/css/Footer-Basic.css';
import './assets/css/Header-Blue.css';
import './assets/css/Highlight-Clean.css';
import './assets/css/Login-Form-Clean.css';
import './assets/css/Navigation-Clean.css';
import './assets/css/Navigation-with-Button.css';
import './assets/css/Registration-Form-with-Photo.css';
import './assets/css/styles.css';
import './assets/css/Team-Clean.css';
import { HashRouter, NavLink, Redirect } from 'react-router-dom';
import HomeImage from './assets/img/bank1.png';
import jsSHA from 'jssha';
import Api from './Api';
import Center from 'react-center';
// This is the Login component used to log into the application. Here is where the user input gets collected, sent to the API and a request is made to provide access to the application.
class Login extends Component {
// The state of the login class is set here - redirect is only used when the login is successful, otherwise the application spits out an login error.
  constructor(params){
    super(params);
    this.state = {username: '', password: '', redirect: false };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  // This onChange function is a function that binds the user input on click, with the login() function.
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  // This login() function does the following: It first takes user input (username and password), and converts it into hexadecimal keys (for authentication), and then creates a unique token for the
  // user that logs in. This token is used to navigate between different components and is also stored in the current session, as well as the userProfile object. Once the user has typed in
  // his/her username and password, the request is sent to the api, matches with the corrensponding details, and gets approved if everything matches - the user is then redirected to dashboard.
  login(){
    // Create token
    const hmac = new jsSHA('SHA-256', 'TEXT');
          hmac.setHMACKey(this.state.password, 'TEXT');
          hmac.update(this.state.username);
          hmac.update(Date.now().toString(36).substring(0, 4));
    const token = `${hmac.getHMAC('HEX')}%${this.state.username}`;
    sessionStorage.setItem('token', token);
    // Calling the axios connection from the API component and storing the client information in an JavaScript variable called 'userProfile', which will be called on every page where it's needed.
    const api = Api.establishConnection(token);
    (async() => {
      const result = await api.get('/clients');
      // If the result is correct, the storage item is set to the userProfile variable, which populates the variable with all the client information.
      if(result.status) {
        sessionStorage.setItem('userProfile', JSON.stringify(result.data[0]));
        this.setState({ redirect: true });
      }
      // Else, user input is incorrect and a error is displayed.
      else {
         return (alert("Incorrect username or password - try again!"));
      }
    })();
  }
  // An alert function when the user has forgotten the username/password combo.
  forgot(){
    return alert("Please contact Bank of SUN if your details have been forgotten!")
  }
    render() {
      // If the state of redirect is true, the login function will execute and the application will navigate to the dashboard.
      if (this.state.redirect) {
        return (<Redirect to={{pathname: './dashboard', state: this.state}}/>);
      }
        // onChange functions are used here to bind user input to the state of the component.
        // NavLinks are used to navigate between different components
        return ( 
        <HashRouter> 
            <div>
            <div className="features-blue" style={{backgroundColor: 'rgb(24,78,142)', borderBottom: '5px solid white'}}>
                  <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                    <div className="container"><a className="navbar-brand" style={{color: '#ffffff'}}>Bank of SUN</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                      <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                          <li className="nav-item" role="presentation"><NavLink exact to = "/homepage"><a className="nav-link" href="homepage.html" style={{color: '#ffffff'}}>Back</a></NavLink></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="login-clean" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)'}}>
                <Center>
                  <div>
                    <h2 className="sr-only">Login Form</h2>
                     <div className="illustration" style={{width: 244}}><img src={HomeImage} style={{width: 257, height: 221}} /></div>
                    <div className="form-group"><input className="form-group" type="text" name="username" placeholder="Username" onChange = {this.onChange} /></div>
                    <div className="form-group"><input className="form-group" type="password" name="password" placeholder="Password" onChange = {this.onChange} /></div>
                    <div className="form-group"><button className="btn btn-primary btn-block" type="submit" onClick = {this.login}>Log In</button></div><NavLink exact to = "/login"><a onClick = {this.forgot} href="/login" className="forgot" style={{color: 'white'}}>Forgot your email or password?</a></NavLink>
                  </div>
                  </Center>
                </div>
                
            <div className="footer-basic" style={{backgroundColor: '#ffffff'}}>
            <footer>
              <div className="social"><a href="#"><i className="icon ion-social-instagram" /></a><a href="#"><i className="icon ion-social-snapchat" /></a><a href="#"><i className="icon ion-social-twitter" /></a><a href="#"><i className="icon ion-social-facebook" /></a></div>
              <ul className="list-inline">
                <NavLink exact to = "/homepage"><li className="list-inline-item">Home</li></NavLink>
                <NavLink exact to = "/team"><li className="list-inline-item">Meet the Team</li></NavLink>
                <NavLink exact to = "/terms"><li className="list-inline-item">Terms</li></NavLink>
                <NavLink exact to = "/policy"><li className="list-inline-item">Privacy Policy</li></NavLink>
              </ul>
              <p className="copyright">Bank of SUN © 2018</p>
            </footer>
          </div>
         </div>
        </HashRouter>
        );
    }
}
 
export default Login;