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
// This component will display all the previous transactions of the current authenticated user.
class ViewTransactions extends Component {
  // The state of the transaction is set here.
  constructor(params) {
    super(params);
    this.state = { transactions: [] };
  };
  // componentDidMount will check if userProfile and token is fetched.
  componentDidMount() {
    let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));
    let token = sessionStorage.getItem('token');
    // Here the Api is called again to establish a connection, and a GET request is made to fetch information from the endpoint.
    let api = Api.establishConnection(token);
    (async () => {
      const accounts = await api.get(`/accounts/${userProfile._id}`);
      let transactions = [];
      for(let i = 0; i < accounts.data.length; i++) {
        let transactionList = await api.get(`/transactions/${accounts.data[i]._id}/.*`);
        transactionList.data.forEach(transaction => {
          transactions.push(transaction);
        })
      }
      this.setState({transactions: transactions});
    })();
  };
    render() {
        // The state of transaction can now be fetched and information about the transaction history can be displayed.
        // NavLinks are used to navigate between components, and back to the dashboard.
        return (
            <div>
              <div className="features-blue" style={{borderBottom: '5px solid white'}}>
                  <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                    <div className="container"><a className="navbar-brand" href="dashboard.html" style={{color: '#ffffff'}}>Bank of SUN</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                      <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                          <NavLink exact to = "/dashboard"><li className="nav-item" role="presentation"><a className="nav-link" href="homepage.html" style={{color: '#ffffff'}}>Back</a></li></NavLink>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              <div style={{background: 'linear-gradient(135deg, #172a74, #21a9af)', height: 'auto', width: 'auto', color: 'white'}}>
                <form method="post" style={{width: 'auto', height: 'auto'}}>
                  <h2 className="sr-only">Login Form</h2>
                  <h1 style={{height: 59, fontSize: 27, textAlign: "center", paddingTop: 10}}>Transaction History</h1>
                  <div className="illustration" style={{width: 244}} />
                  <div className="form-group">
                    <div className="col">
                    <ul style={{ listStyleType: "none" }}>
                    {this.state.transactions.map(transactions => 
                      <div style= {{paddingBottom: 15}}>
                        <li style={{textAlign: "justify", borderBottom: "2px solid white", width: '100%'}} ><b>Amount: </b>R{transactions.amount} - <b>Balance: </b>R{transactions.balance} - <b>Type:</b> {transactions.type} - <b>Ref:</b> {transactions.ref} - <b>Time:</b> {transactions.time}</li>
                      </div>
                    )}
                    </ul>
                    </div>
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
 
export default ViewTransactions;