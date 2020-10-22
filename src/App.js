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
import Homepage from './homepage';
import Login from './login';
import CreateAccount from './createaccount';
import Dashboard from './dashboard';
import ExternalVendors from './externalvendors';
import Faq from './faq';
import MakePayments from './makepayments';
import Team from './team';
import Ticket from './ticket';
import ViewProfile from './viewprofile';
import ViewBalances from './viewbalances';
import Policy from './policy';
import Terms from './terms';
import ViewTransactions from './viewtransactions';
import Transfer from './transfer';
import AddRecipent from './addrecipient';
import { Route, HashRouter } from 'react-router-dom';
// This is the main routing component, which specifies where each component must go to, and where the user starts as the app is started.
class App extends Component {
  render() {
    return (
      // Specifies the exact route path the component will follow, if specified by a 'NavLink'. Route will be called if a NavLink with a path to the component is provided.
      <HashRouter>
      <div className = "content">
      <Route exact path= "/" component = {Homepage}></Route>
      <Route exact path = "/login" component ={Login}></Route>
      <Route exact path = "/createaccount" component = {CreateAccount}></Route>
      <Route exact path = "/dashboard" component = {Dashboard}></Route>
      <Route exact path = "/externalvendors" component = {ExternalVendors}></Route>
      <Route exact path = "/faq" component = {Faq}></Route>
      <Route exact path = "/homepage" component = {Homepage}></Route>
      <Route exact path = "/makepayments" component = {MakePayments}></Route>
      <Route exact path = "/team" component = {Team}></Route>
      <Route exact path = "/ticket" component = {Ticket}></Route>
      <Route exact path = "/viewprofile" component = {ViewProfile}></Route>
      <Route exact path = "/viewbalances" component = {ViewBalances}></Route>
      <Route exact path = "/policy" component = {Policy}></Route>
      <Route exact path = "/terms" component = {Terms}></Route>
      <Route exact path = "/viewtransactions" component = {ViewTransactions}></Route>
      <Route exact path = "/transfer" component = {Transfer}></Route>
      <Route exact path = "/addrecipient" component = {AddRecipent}></Route>
      </div>
      </HashRouter>
    );
  }
}

export default App;
