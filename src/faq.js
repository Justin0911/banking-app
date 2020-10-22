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
// The FAQ component acts as a support template for when users struggle to do something on the website.
class Faq extends Component {
    render() { 
        // NavLinks are used to navigate between components, and back to the dashboard.
        return (
            <div>
              <div className="features-blue" style={{borderBottom: '5px solid white'}}>
                  <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                    <div className="container"><a className="navbar-brand" href="dashboard.html" style={{color: '#ffffff'}}>Bank of SUN</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                      <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                          <li className="nav-item" role="presentation"><NavLink exact to = "/dashboard" style={{color: '#ffffff'}}>Back</NavLink></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              <div className="features-blue" style={{backgroundColor: 'rgba(255,255,255,0)'}}>
                <div className="features-blue">
                  <div className="row" style={{backgroundColor: 'rgba(255,255,255,0)'}}>
                    <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                      <div className="intro">
                        <h1 className="text-center" style={{color: 'rgb(255,255,255)', fontFamily: '"Source Sans Pro", sans-serif', paddingTop: "50px"}}>FAQ</h1>
                        <p className="text-center"><span className="by" /> </p>
                      </div>
                      <div className="text">
                        <p style={{color: 'rgb(255,255,255)', fontFamily: '"Source Sans Pro", sans-serif'}}><br />FAQ’s:<br />Q: Where can I find my balances?<br />A: You can find all your balances for all your accounts by going to your dashboard, and clicking on the “View Balances” Button.<br />Q: How do I open up a new account?<br />A: You can
                          open up a new account by going to your dashboard and selecting the “Open New Account” button, and choosing which account you want to apply for! Please have all required documents on hand!<br />Q: Why isn’t my document uploading?<br />A:
                          Please make sure that they are in PDF format! You can also visit ilovepdf.com to change the file types of documents <br />Q: Can I contact you guys directly?<br />A: Yes! You can click on the “Create Ticket” button at the bottom
                          to contact us directly!<br />Q: Where are you based?<br />A: We are located in the Neelsie, Stellenbosch University.<br /><br /></p>
                        <figure>
                          <figcaption />
                        </figure>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highlight-clean" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)'}}>
                <div className="features-blue">
                  <div className="features-blue">
                    <h2 className="text-center" style={{color: 'rgb(255,255,255)'}}>Not Answered? Ask an admin!</h2>
                    <p className="text-center" />
                  </div>
                  <NavLink exact to = "/ticket"><div className="buttons"><a className="btn btn-primary" role="button" href="#">Click here!</a></div></NavLink>
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
 
export default Faq;