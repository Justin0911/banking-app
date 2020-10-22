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
import { NavLink} from 'react-router-dom';
import RecipientImage from './assets/img/picture.png';
// This component is used to add a recipient to the current users banking list - which is not currently working.
class AddRecipient extends Component {
  // A function that alerts the user that this functionality is currently unavailable.
  displayMessage(){
    return alert("Due to API limitations - we are unable to add beneficiaries")
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
                          <NavLink exact to = "/dashboard"><li className="nav-item" role="presentation"><a className="nav-link" href="homepage.html" style={{color: '#ffffff'}}>Back</a></li></NavLink>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              <div className="register-photo" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)'}}>
                <div className="form-container">
                  <div className="image-holder" style={{backgroundImage: {RecipientImage}, width: 478, height: 486}} />
                  <form>
                    <h2 className="text-center"><strong>Add a Benificiary/Recipient</strong></h2>
                      <input type = "text" name = "first" placeholder = "First Name:" style={{margin:5 }}></input>
                      <input type = "text" name = "last" placeholder = "Last Name:" style={{margin:5 }}></input>
                      <input type = "text" name = "bank" placeholder = "Bank:" style={{margin:5 }}></input>
                      <input type = "text" name = "accountnum" placeholder = "Account Number:" style={{margin:5 }}></input>
                      <input type = "text" name = "type" placeholder = "Account Type:" style={{margin:5 }}></input>
                      <input type = "text" name = "ref" placeholder = "Reference:" style={{margin:5 }}></input>
                    <div className="form-group"><NavLink exact to = "/dashboard"><button className="btn btn-primary btn-block" type="submit" style={{backgroundColor: '#184e8e'}} onClick = {this.displayMessage}>Add</button></NavLink></div>
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
 
export default AddRecipient;