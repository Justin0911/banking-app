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
import Member1 from './assets/img/Paul.jpg';
import Member2 from './assets/img/Justin.jpg';
import Member3 from './assets/img/Heinrich.jpg';
import Member4 from './assets/img/Ryan.jpg';
import Member5 from './assets/img/Carl.jpg';
import Member6 from './assets/img/Emma.jpg';
// The team component is also static, as it only displays information about the team of Bank of SUN.
class Team extends Component {
    render() { 
        // NavLinks are used here to navigate between different components, as well as back to the homepage.
        return (
            <div>
              <div className="features-blue" style={{borderBottom: '5px solid white'}}>
                  <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                    <div className="container"><a className="navbar-brand" href="dashboard.html" style={{color: '#ffffff'}}>Bank of SUN</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                      <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                          <li className="nav-item" role="presentation"><NavLink exact to = "/homepage" style={{color: '#ffffff'}}>Back</NavLink></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              <div className="team-clean" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)'}}>
                <div className="container">
                  <div className="intro">
                    <h2 className="text-center" style={{color: 'rgb(255,255,255)'}}>Bank of Sun Team</h2>
                    <p />
                  </div>
                  <div className="row people">
                    <div className="col-md-6 col-lg-4 item"><img className="rounded-circle" src= {Member1} style={{width: 160, height: 160}} />
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Paul Theron</h3>
                      <p className="title">Head of it department</p>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}><strong>Studied Bcom Information System management-</strong><br />"I believe that through knowledge and discipline, financial peace is possible for all of us."<br /><br /><br /></p>
                      <div className="social"><a href="#" /><a href="#" /><a href="#" /></div>
                    </div>
                    <div className="col-md-6 col-lg-4 item"><img className="rounded-circle" src= {Member2} style={{height: 160}} />
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Justin Smith</h3>
                      <p className="title">Chief operating officer</p>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}><strong>Studied Ba Socio Informatics -&nbsp;</strong><br />"Finance is not merely about making money. It's about achieving our deep goals and protecting the fruits of our labor. It's about stewardship and, therefore, about achieving
                        the good society."<br /><br /><br /></p>
                      <div className="social"><a href="#" /><a href="#" /><a href="#" /></div>
                    </div>
                    <div className="col-md-6 col-lg-4 item"><img className="rounded-circle" src= {Member3} style={{height: 160}} />
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Heinrich De Lange</h3>
                      <p className="title">Head of finance</p>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}><strong>Studied Bcom Information System Management-&nbsp;</strong><br />"Work hard for what you want because it won't come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind
                        to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive."<br /><br /></p>
                    </div>
                    <div className="col-md-6 col-lg-4 item"><img className="rounded-circle" src= {Member4} style={{width: 160, height: 160}} />
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Ryan Evans</h3>
                      <p className="title">Head of marketing</p>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}><strong>Studied Bcom Logistics Management -&nbsp;</strong><br />"The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy."<br /><br /></p>
                      <div className="social"><a href="#" /><a href="#" /><a href="#" /></div>
                    </div>
                    <div className="col-md-6 col-lg-4 item"><img className="rounded-circle" src={Member5} style={{height: 160}} />
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Carl Kent</h3>
                      <p className="title" style={{color: 'rgb(188,188,188)'}}>Head of human relations</p>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}><strong>Studied Ba Human Recourse Management -&nbsp;</strong><br />"A budget tells us what we can't afford, but it doesn't keep us from buying it."<br /><br /></p>
                    </div>
                    <div className="col-md-6 col-lg-4 item"><img className="rounded-circle" src={Member6} style={{height: 160}} />
                      <h3 className="name" style={{color: 'rgb(255,255,255)'}}>Emma Voster</h3>
                      <p className="title">Head of Design</p>
                      <p className="description" style={{color: 'rgb(255,255,255)'}}><strong>Graduated with a diploma in Graphic design -&nbsp;</strong><br />"A budget tells us what we can't afford, but it doesn't keep us from buying it."<br /><br /></p>
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
 
export default Team;