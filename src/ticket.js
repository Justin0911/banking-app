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
import Center from 'react-center';
// The ticket component is used as a support function for users to submit tickets when encountering problems with the application.
class Ticket extends Component {
  // The constructor where the ticket state is set.
  constructor(){
    super();
    this.state = { ticket : {} }
  }
  // This is the getTicket function to create a get request from the '/generic/' API endpoint - which only returns 1 static ticket.
  getTicket() {
   let token = sessionStorage.getItem('token');
    // Here the Api is called again to establish a connection, and a GET request is made to fetch information from the endpoint.
   let api = Api.establishConnection(token);
    // This ID was retrieved as part of the response after posting a new ticket. This is used as an example as the API is expecting us to know what the auto-generated ID's are for a
    // new generic ticket instead of the user's ID. When the user's ID is passed in, a 403 (Forbidden) response is returned. This ID is not stored as part of sessionStorage due to the ID
    // disappearing once the user's session expires and we won't be able to retrieve this again.
   let ticketIdExample = '5732f953-663b-3519-b963-2b32e4f49cf9';
   (async () => {
     const tick = await api.get(`/generic/${ticketIdExample}`);
     this.setState({ticket: tick.data});
   })();
 }
 // This is the postTicket function to create a post request to the '/generic/' API endpoint
  postTicket(){
    let ticket= {
      det: document.getElementById('subject').value,
      tick: document.getElementById('tick').value,
    }
    let token = sessionStorage.getItem('token');
    // Here the Api is called again to establish a connection, and a POST request is made for a transaction.
    let api = Api.establishConnection(token);
    (async () => {
      api.post(`/generic`, ticket);
    })();

  }
  // This is the deleteTicket function to create a delete request to the '/generic/' API endpoint - can only delete static specified user object ID.
  deleteTicket(){
    //TODO
  }
    render() { 
        // Functions such as postTicket(), getTicket() and deleteTicket() are called in the return, in order to execute them.
        // NavLinks are used here to navigate between different components, as well as back to the homepage.
        return (
            <div>
              <div className="features-blue" style={{borderBottom: '5px solid white'}}>
                  <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                    <div className="container"><a className="navbar-brand" href="dashboard.html" style={{color: '#ffffff'}}>Bank of SUN</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                      <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                          <li className="nav-item" role="presentation"><NavLink exact to = "/faq" style={{color: '#ffffff'}}>Back</NavLink></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                
              <div className="contact-clean" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)'}}>
              <h2 className="text-center" style={{color: '#ffffff'}}>Ask us!</h2>
                  <Center>
                  <br />
                  <div className="form-group"><input id = "subject" type = "text" className="form-control" type="text" name="subject" placeholder="Subject" /></div><br />
                  <div className="form-group"><input id = "tick" type = "text" className="form-control" rows={14} name="message" placeholder="Detailed message on issue:" defaultValue={""} /></div>
                  <div className="form-group"><button className="btn btn-primary" onClick={() => this.postTicket()}>Send</button></div>
                  <div className="form-group"><button className="btn btn-primary" onClick = {() => this.getTicket()}>Get Ticket</button></div>
                  </Center>
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
 
export default Ticket;