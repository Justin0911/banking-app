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
import HomeImage from './assets/img/bank1.png';
import { NavLink } from 'react-router-dom';
// This is the homepage component, where the user lands when the application is started. Here the user can select to Login, or navigate to different components such as Meet the Team, Privacy Policy and Terms and Conditions.
class Homepage extends Component{
  render(){
    // NavLinks are used here to navigate between the different components
    return(
      <div className="header-blue">
      <div className="features-blue" style={{backgroundColor: 'rgb(24,78,142)', borderBottom: '5px solid white'}}>
                  <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                    <div className="container"><a className="navbar-brand" href="dashboard.html" style={{color: '#ffffff'}}>Bank of SUN</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                      <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                          <li className="nav-item" role="presentation"><NavLink exact to = "/login"><a className="nav-link" style={{color: '#ffffff'}}>Login as User</a></NavLink></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
            <div className="container hero">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                  <h1>The bank for students</h1>
                  <p>Engage in what is the most prestige brand of Online Banking to date - all simplified and sleek</p></div>
                <div className="col"><img src= {HomeImage} style={{width: 400, height: 384, padding: 18}} /></div>
                <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder" style={{padding: 44}}>
                  <div className="iphone-mockup">
                    <div className="screen" />
                  </div>
                </div>
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

export default Homepage;
