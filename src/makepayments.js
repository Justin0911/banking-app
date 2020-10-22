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
// This is the payments component - where payments are done. The user can specify what he/she wants to do with regards to transactions.
class Payments extends Component {
    // The state of the payments component is set here.
    constructor() {
      super()
      this.state = { transaction: {}, accounts: [] }
    }
    // Life-cycle hook that checks if the component did mount, and gets data from sessionStorage and assigns them to variables. It also establishes a connection with the accounts endpoint of the API.
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
    // postTransaction is a function written to send a POST request to the API to make a transaction. Here the user specifies the amount and any other details relating to the transfer.
    postTransaction() {
      let transaction = {
        type: document.getElementById('Type').value,
        src: this.state.accounts[document.getElementById('accountFrom').selectedIndex]._id,
        dest: document.getElementById('Dest').value,
        amount: parseInt(document.getElementById('Amount').value),
        ref: document.getElementById('Ref').value
      }
      let token = sessionStorage.getItem('token');
      // Here the Api is called again to establish a connection, and a POST request is made for a transaction.
      let api = Api.establishConnection(token);
      (async () => {
          if(transaction.amount === null){
            return alert("Error");
          }else{
            api.post(`/transactions`, transaction);
            window.location.reload()
            return alert("Successful!");
            
          }
      })();
    }
    render() { 
    // In the return, onClick functions are called such as postTransaction. The user input is called by a id, and the id is then called in the transaction variable to populate user input.
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
          <div className="features-blue">
            <div className="container">
              <div className="row" style={{backgroundColor: 'rgba(255,255,255,0)', height: 600}}>
                <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2" style={{height: 500}}>
                  <div className="intro">
                    <h1 className="text-center" style={{color: 'rgb(255,255,255)', fontFamily: '"Source Sans Pro", sans-serif', paddingTop: "50px"}}>Make Payments</h1>
                  </div>
                  <h1 style={{color: 'rgb(255,255,255)', fontFamily: '"Source Sans Pro", sans-serif'}}>Payments:</h1>
                  <lable>Select Account to Pay From:</lable> <br/>
                  <select style= {{width: 300, marginRight: 5, marginBottom: 10, height: 30, fontFamily: '"Source Sans Pro", sans-serif'}} id="accountFrom">{this.state.accounts.map(account => 
                    <option>{`${account.type} - R${account.balance}`}</option>
                  )}
                  </select>
                  <div className="form-group"><input id="Dest" type="text" name="dest" placeholder="Account Number:" style={{width: 300, color: 'rgb(0,0,0)', fontFamily: '"Source Sans Pro", sans-serif'}} /></div>
                  <div className="form-group"><input id="Type" type="text" name="type" placeholder="Type:" style={{width: 300, fontFamily: '"Source Sans Pro", sans-serif'}} /></div>
                  <div className="form-group"><input id="Amount" type="text" name="amount" placeholder="Amount:" style={{width: 300, fontFamily: '"Source Sans Pro", sans-serif'}} /></div>
                  <div className="form-group"><input id="Ref" type="text" name="ref" placeholder="Reference:" style={{width: 300, fontFamily: '"Source Sans Pro", sans-serif'}} /></div>
                  <button className="btn btn-primary" type="button" style={{fontFamily: '"Source Sans Pro", sans-serif', marginRight: 5}} onClick={() => this.postTransaction()}>Pay</button>
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
 
export default Payments;