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
import SavingsImage from './assets/img/why_banks_wont_increase_savings_account_rates.jpg';
import CreditImage from './assets/img/guidecredit_large.jpg';
import InvestImage from './assets/img/download.jpg';
// This component allows the user open a new account - but is unavailable at this moment.
class CreateAccount extends Component {
  // A function that alerts the user that this functionality is currently unavailable.
  alertFunction(){
    return alert("Unfortunately, this option is not available. Please visit the branch to open up a new account!")
  }
    render() {
        // NavLinks are used to navigate between the components, as well as back to the dashboard.
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
              <div className="article-list" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)'}}>
                <div className="container" style={{color: 'rgb(49,52,55)', backgroundColor: 'rgba(0,0,0,0.0)'}}>
                  <div className="intro">
                    <h2 className="text-center" style={{color: 'rgb(255,255,255)'}}>Choose an Account:</h2>
                    <p className="text-center" style={{color: 'rgb(255,255,255)'}}>Please specify which account you want to open with Bank of SUN</p>
                  </div>
                  <div className="row articles">
                    <div className="col-sm-6 col-md-4 item"><a href="#"><img className="img-fluid" src= {SavingsImage} style={{height: '193.234px'}} /></a>
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Savings Account</h3>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}>Save your money in the most secure and efficient way possible!</p><a className="action"><button className="btn btn-primary" onClick = {this.alertFunction}><i className="fa fa-arrow-circle-right" /></button></a></div>
                    <div className="col-sm-6 col-md-4 item"><a href="#"><img className="img-fluid" src= {CreditImage} style={{height: '193.234', width: 215}} /></a>
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Credit Account</h3>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}>Pay off debt in the most benificial way possible!</p><a className="action"><button className="btn btn-primary" onClick = {this.alertFunction}><i className="fa fa-arrow-circle-right" /></button></a></div>
                    <div className="col-sm-6 col-md-4 item"><a href="#"><img className="img-fluid" src={InvestImage} style={{width: '289.984px', height: '193.234px'}} /></a>
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Investment</h3>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}>Invest in Bank of Sun to reap what you sow, in the best way possible!</p><a className="action"><button className="btn btn-primary" onClick = {this.alertFunction}><i className="fa fa-arrow-circle-right" /></button></a></div>
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
 
export default CreateAccount;