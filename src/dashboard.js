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
// This is the main Dashboard component for a authenticated user. Here is where the state of the login component is stored, and a userProfile object is created to store the details of the user.
// The user can navigate to different components here and select which function to complete.
class Dashboard extends Component {
  // This contructor sets the current state of the userProfile object, which is empty, and will be populated later.
  constructor() {
    super();
    this.state = { userProfile: {} };
  }
  // Here the userProfile object is populated and the state is set from the sessionStorage.
  componentDidMount() {
    let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));
    this.setState({ userProfile: userProfile });
  }
  // An attempted capitalize function that does not work with the current state of userProfile.
  capitalize(word){
    let char = word.charAt(0).toUpperCase();
    let remainder = word.slice(1);
    return char + remainder;
  }
    render() { 
    // In the return - some functions are written inside the html like sessionStorage.clear() - as this is the logout function which clears the current session of anything inside, and the user can start a new session if needed
    // The session will expire when the browser closes. This is for safety purposes.
    // NavLinks are also provided here to navigate between the different components/paths.
        return (
            <div>
              <div className="features-blue" style={{borderBottom: '5px solid white'}}>
                  <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                    <div className="container"><a className="navbar-brand" href="dashboard.html" style={{color: '#ffffff'}}>Bank of SUN</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                      <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                          <li className="nav-item" role="presentation"><button className="btn btn-primary" onClick={() => sessionStorage.clear()}><a className="nav-link" href="/homepage" style={{color: '#ffffff'}}>Log Out</a></button></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              <div className="features-blue">
                <div className="container" style={{backgroundColor: 'rgba(0,0,0,0.0)', width: 974, height: 717}}>
                  <div className="intro">
                  <h2 className="text-center">Welcome <em>{`${this.state.userProfile.title} ${this.state.userProfile.last}`}</em></h2>
                  </div>
                  <div className="row features" style={{height: 416}}>
                    <div className="col-sm-6 col-md-4 item"><i className="material-icons icon" style={{color: 'rgb(255,255,255)'}}>account_circle</i><NavLink exact to = "/viewprofile"><button className="btn btn-primary" type="button">Profile</button></NavLink>
                      <h3 className="name" />
                      <p className="description">View your profile.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 item"><i className="fa fa-money icon" style={{color: 'rgb(2,254,42)'}} />
                      <h3 className="name"><NavLink exact to= '/viewbalances'><button className="btn btn-primary" type="button">Accounts</button></NavLink></h3>
                      <p className="description">View the balances of multiple accounts.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 item"><i className="fa fa-list-alt icon" style={{color: 'rgb(255,255,255)'}} />
                      <h3 className="name"><NavLink exact to= '/createaccount'><button className="btn btn-primary" type="button">New Account</button></NavLink></h3>
                      <p className="description">Add a Savings, Credit or Investment Account.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 item"><i className="fa fa-list-alt icon" style={{color: 'rgb(255,255,255)'}} />
                      <h3 className="name"><NavLink exact to= '/addrecipient'><button className="btn btn-primary" type="button">Add Recipient</button></NavLink></h3>
                      <p className="description">Add recipients to your list, to make recurring payments so much easier!</p>
                    </div>
                    <div className="col-sm-6 col-md-4 item"><i className="fa fa-cc-paypal icon" style={{color: 'rgb(2,254,42)'}} />
                      <h3 className="name"><NavLink exact to= '/makepayments'><button className="btn btn-primary" type="button">Payments</button></NavLink></h3>
                      <p className="description">Pay someone.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 item"><i className="fa fa-cc-paypal icon" style={{color: '#ecff0c'}} />
                      <h3 className="name"><NavLink exact to= '/transfer'><button className="btn btn-primary" type="button">Transfers</button></NavLink></h3>
                      <p className="description">Transfer money into different accounts.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 item"><i className="fa fa-shopping-cart icon" style={{color: 'rgb(30,255,255)'}} />
                      <h3 className="name"><NavLink exact to= '/externalvendors'><button className="btn btn-primary" type="button">Buy</button></NavLink></h3>
                      <p className="description">Want to top up your Air-time? Buy airtime and other royalties like water and electricity right here!</p>
                    </div>
                    <div className="col-sm-6 col-md-4 item"><i className="fa fa-wrench icon" style={{color: 'rgb(30,255,255)'}} />
                      <h3 className="name"><NavLink exact to= '/faq'><button className="btn btn-primary" type="button">Ticket</button></NavLink></h3>
                      <p className="description">Having any troubles? Contact our support team to get some help.</p>
                    </div>
                    <div className="col-sm-6 col-md-4 item"><i className="fa fa-folder-open icon" style={{color: 'rgb(30,255,255)'}} />
                      <h3 className="name"><NavLink exact to= '/viewtransactions'><button className="btn btn-primary" type="button">Transaction History</button></NavLink></h3>
                      <p className="description">View previous transactions</p>
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
 

export default Dashboard;