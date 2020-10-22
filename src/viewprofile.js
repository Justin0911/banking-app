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
import { NavLink } from 'react-router-dom';
import ProfileImage from './assets/img/picture.png';
// This component returns the users' information.
class ViewProfile extends Component {
  // The state of the userProfile is set here.
  constructor() {
    super();
    this.state = { userProfile: {} };
  }
  // This function is part of the life-cycle hook that checks if the component did mount, and to see if the state is indeed set from the previous component. The userProfile is then also populated and can be called in the render method.
  componentDidMount() {
    let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));
    this.setState({ userProfile: userProfile });
  }
    render() {
        // The userProfile object can now be called, and variables from it can be displayed such as Title, First Name, Last Name and ID.
        // NavLinks are used to navigate between components, and also back to the dashboard.
        return (
            <div>
              <div className="features-blue" style={{borderBottom: '5px solid white'}}>
                  <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                    <div className="container"><a className="navbar-brand" href="dashboard.html" style={{color: '#ffffff'}}>Bank of SUN</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                      <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                          <NavLink exact to= "/dashboard"><li className="nav-item" role="presentation"><a className="nav-link" style={{color: '#ffffff'}}>Back</a></li></NavLink>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              <div className="register-photo" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)'}}>
                <div className="form-container">
                  <div className="image-holder" style={{backgroundImage: {ProfileImage}, width: 478, height: 486}} />
                  <form method="post">
                    <h2 className="text-center"><strong>Your profile</strong></h2>
                    <ul style={{ listStyleType: "none" }}>
                      <li style={{padding:10}} key={this.state.userProfile._id}>
                        <b>Title: </b>{`${this.state.userProfile.title}`}
                      </li>
                      <li style={{padding:10}} key={this.state.userProfile._id}>
                        <b>Name: </b>{`${this.state.userProfile.first}`}
                      </li>
                      <li style={{padding:10}} key={this.state.userProfile._id}>
                        <b>Last Name: </b>{`${this.state.userProfile.last}`}
                      </li>
                      <li style={{padding:10}} key={this.state.userProfile._id}>
                        <b>ID Number: </b> {` ${this.state.userProfile.id}`}
                      </li>
                      <li style={{padding:10}} key={this.state.userProfile._id}>
                        <b>Date of Birth: </b>{`${this.state.userProfile.dob}`}
                      </li>
                      <li style={{padding:10}} key={this.state.userProfile._id}>
                        <b>Email: </b>{`${this.state.userProfile.email}`}
                      </li>
                          </ul>
                    </form>
                </div>
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
          );
    }
}
 
export default ViewProfile;