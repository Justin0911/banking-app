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
import Api from './Api';
// ViewBalances displays all the current accounts for the authenticated user.
class ViewBalances extends Component {
  // The state of the component is set here.
  constructor(){
    super()
    this.state = {accounts: []};
  }
  // This function is part of the life-cycle hook that checks if the component did mount, and to see if the state is indeed set from the previous component. The token and userProfile is set from sessionStorage and can be called in the render method.
  componentDidMount() {
    let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));
    let token = sessionStorage.getItem('token');
    // Here the Api is called again to establish a connection, and a GET request is made to fetch information from the endpoint.
    let api = Api.establishConnection(token);
    (async () => {
      const accounts = await api.get(`/accounts/${userProfile._id}`);
      this.setState({accounts: accounts.data});
    })();
  };
    render() { 
        // The state of the account object is mapped with a key - here the different accounts (if more than 1) are displayed in lists, with details such as Amount, Type and Description being displayed.
        // NavLinks are used here to navigate back to the dashboard.
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
              <div className="login-clean" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)', height: 643}}>
                <form method="post" style={{width: 373, height: 400}}>
                  <h2 className="sr-only">Login Form</h2>
                  <h1 style={{height: 40, fontSize: 27}}>Account Balances:</h1>
                  <div className="illustration" style={{width: 244}} />
                  <div className="form-group">
                    <div className="col" />
                    {this.state.accounts.map(account => 
                      <div>
                        <div style ={{borderTop: '2px solid black', borderBottom: '2px solid black'}}><b>Description: </b>{account.description}</div>
                        <div style ={{borderBottom: '2px solid black'}}><b>Balance: </b>R{account.balance}</div>
                        <div style ={{borderBottom: '2px solid black'}}><b>Type : </b>{account.type}</div>
                      </div>
                    )}
                  </div></form>
              </div>
              <div className="footer-basic" style={{padding: '30px 0px'}}>
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
 
export default ViewBalances;