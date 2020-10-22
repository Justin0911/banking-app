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
import AirtimeImage from './assets/img/airtime.jpeg';
import FinesImage from './assets/img/fines.jpg';
import ElecImage from './assets/img/electricity.jpg';
import Api from './Api';
// This component is used to make purchases from an external vendor such as buying airtime, paying fines and buying electricity.
class ExternalVendors extends Component {
  constructor() {
    super()
    this.state = { transaction: {}, accounts: [] }
  }
  // This life-cycle hook returns the userProfile and token from sessionsStorage and establishes a connection. It is then used to get the accounts from userProfile in order to get the account.id.
  componentDidMount() {
    let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));
    let token = sessionStorage.getItem('token');
    // Here the Api is called again to establish a connection, and a GET request is made to fetch information from the endpoint.
    let api = Api.establishConnection(token);
    (async () => {
      const accounts = await api.get(`/accounts/${userProfile._id}`);
      this.setState({accounts: accounts.data});
    })();
  }
// postTransaction is a function written to send a POST request to the API to make a transaction. It takes 3 parameters, where the user specifies the amount and any other details relating to the purchase.
  postTransaction(id, t, r) {
    let transaction = {
      type: t,
      src: this.state.accounts[document.getElementById('externAccountFrom').selectedIndex]._id,
      dest: `ExternalVendor - ${Math.round(Math.random() * 1000)}`,
      amount: parseInt(document.getElementById(id).value),
      ref: r
    }
    let token = sessionStorage.getItem('token');
    // Here the Api is called again to establish a connection, and a POST request is made for a transaction.
    let api = Api.establishConnection(token);
    (async () => {
      try{
      api.post(`/transactions`, transaction);
      window.location.reload()
      }
      catch(e){
        console.log(e)
      }
    })();
    return alert("Thank you purchasing from the external vendor/s. Your generated code is: ADFE-" + (Math.random()*1000 ) + ". Please enter this code into your device to claim your purchase!")
  }
    render() { 
        // onClick functions like postTransaction() is used to make the post request to the API. In this case, parameters are specified for each type of purchase, to indicate which account the user is using.
        // NavLink is used to navigate back to the dashboard.
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
              <div className="article-list" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)', height: 607}}>
                <div className="container" style={{color: 'rgb(49,52,55)', backgroundColor: 'rgba(0,0,0,0.0)'}}>
                  <div className="intro">
                    <h2 className="text-center" style={{color: 'rgb(255,255,255)'}}>Choose an Option:</h2>
                    <p className="text-center" style={{color: 'rgb(255,255,255)'}}>Select an option below</p>
                  </div>
                  <div className="row articles" style={{height: 562}}>
                    <div className="col-sm-6 col-md-4 item" style={{height: 459}}><a href="#"><img className="img-fluid" src= {AirtimeImage} style={{height: '193.234px'}} /></a>
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Buy Airtime/Data</h3>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}>Buy Airtime or data!</p><a href="Create Savings Account.html" className="action" />
                      <form>
                        <select style= {{width: 300, marginRight: 5, marginBottom: 10, height: 30, fontFamily: '"Source Sans Pro", sans-serif'}} id="externAccountFrom">{this.state.accounts.map(account => 
                         <option>{`${account.type} - R${account.balance}`}</option>
                         )}
                        </select>
                        <input id="AirtimeAmount" className="form-control" type="number" />
                      <button className="btn btn-primary" type="button" onClick = {() => this.postTransaction("AirtimeAmount", "User Account", "Data/Airtime")}>Buy</button>
                    </form>
                    </div>
                    <div className="col-sm-6 col-md-4 item" style={{height: 459}}><a href="#"><img className="img-fluid" src= {FinesImage} style={{height: '193.234', width: 215}} /></a>
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Pay Fines</h3>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}>Here you can pay your fines super easily!</p><a href="Create Credit.html" className="action" />
                      <form>
                        <select style= {{width: 300, marginRight: 5, marginBottom: 10, height: 30, fontFamily: '"Source Sans Pro", sans-serif'}} id="exterAccountFrom">{this.state.accounts.map(account => 
                           <option>{`${account.type} - R${account.balance}`}</option>
                           )}
                        </select>
                        <input id="FineAmount" className="form-control" type="number" />
                        <button className="btn btn-primary" type="button" onClick = {() => this.postTransaction("FineAmount", "User Account", "Fines")}>Pay Fine</button>
                      </form>
                    </div>
                    <div className="col-sm-6 col-md-4 item" style={{height: 459}}><a href="#"><img className="img-fluid" src={ElecImage} style={{width: '289.984px', height: '193.234px'}} /></a>
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Buy Electricity</h3>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}>Almost out of electricity? Buy here now!</p><a href="Create Investment.html" className="action" />
                      <form>
                        <select style= {{width: 300, marginRight: 5, marginBottom: 10, height: 30, fontFamily: '"Source Sans Pro", sans-serif'}} id="exterAccountFrom">{this.state.accounts.map(account => 
                          <option>{`${account.type} - R${account.balance}`}</option>
                          )}
                        </select>
                        <input id="ElecAmount" className="form-control" type="number" />
                        <button className="btn btn-primary" type="button" onClick = {() => this.postTransaction("ElecAmount", "User Account", "Electricity")}>Buy</button>
                      </form>
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
 
export default ExternalVendors;