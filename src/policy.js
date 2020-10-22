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
// The policy component is a static component where the policies of Bank of SUN is declared.
class Policy extends Component {
    render() { 
        // NavLinks are used to navigate between components, and back to the dashboard.
        return (
            <div>
              <div className="features-blue" style={{backgroundColor: 'rgb(24,78,142)', borderBottom: '5px solid white'}}>
                  <nav className="navbar navbar-light navbar-expand-md navigation-clean" style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
                    <div className="container"><a className="navbar-brand" href="dashboard.html" style={{color: '#ffffff'}}>Bank of SUN</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                      <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                          <li className="nav-item" role="presentation"><NavLink exact to = "/homepage"><a className="nav-link" href="homepage.html" style={{color: '#ffffff'}}>Back</a></NavLink></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              <div className="article-clean" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)'}}>
                <div className="container">
                  <div className="row" style={{backgroundColor: 'rgba(255,255,255,0)'}}>
                    <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                      <div className="intro">
                        <h1 className="text-center" style={{color: 'rgb(255,255,255)', fontFamily: '"Source Sans Pro", sans-serif'}}>Privacy Policy</h1>
                        <p className="text-center"><span className="by" /> </p>
                      </div>
                      <div className="text">
                        <h2 />
                        <p style={{color: 'rgb(255,255,255)', fontFamily: '"Source Sans Pro", sans-serif'}}><br /><strong>Privacy Policy&nbsp;</strong><br /><br />Effective date: October 21, 2018&nbsp;<br /><br />Bank of SUN ("us", "we", or "our") operates the http://www.bankofsun.co.za website (the "Service").<br />This page informs you of our
                          policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for Bank of SUN is managed through&nbsp;<a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator.php">Free Privacy Policy</a>.<br /><br />We
                          use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this
                          Privacy Policy have the same meanings as in our Terms and Conditions, accessible from http://www.bankofsun.co.zaInformation&nbsp;<br /><br /><strong>Collection And Use</strong><br /><br />We collect several different types of information
                          for various purposes to provide and improve our Service to you.|<br /><br /><strong>Types of Data Collected</strong><br /><br />Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable
                          information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:<br />Email address, First name and last name, Phone number, Address, State, Province,
                          ZIP/Postal code, CityCookies and Usage Data.<br /><br /><strong>Usage Data</strong><br /><br />We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your
                          computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other
                          diagnostic data.<br /><br /><strong>Tracking &amp; Cookies Data</strong><br /><br />We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.Cookies are files with small amount
                          of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information
                          and to improve and analyze our Service.You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.Examples
                          of Cookies we use:<strong>Session Cookies.</strong>&nbsp;We use Session Cookies to operate our Service.&nbsp;<strong>Preference Cookies.</strong>&nbsp;We use Preference Cookies to remember your preferences and various settings.&nbsp;<strong>Security Cookies.</strong>&nbsp;We
                          use Security Cookies for security purposes.Use of DataBank of SUN uses the collected data for various purposes:To provide and maintain the ServiceTo notify you about changes to our ServiceTo allow you to participate in interactive
                          features of our Service when you choose to do soTo provide customer care and supportTo provide analysis or valuable information so that we can improve the ServiceTo monitor the usage of the ServiceTo detect, prevent and address
                          technical issuesTransfer Of Data Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the
                          data protection laws may differ than those from your jurisdiction.If you are located outside South Africa and choose to provide information to us, please note that we transfer the data, including Personal Data, to South Africa
                          and process it there.Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.Bank of SUN will take all steps reasonably necessary to ensure that your data
                          is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your
                          data and other personal information.<br /><br /><strong>Disclosure Of DataLegal Requirements</strong><br /><br />Bank of SUN may disclose your Personal Data in the good faith belief that such action is necessary to: To comply with
                          a legal obligationTo protect and defend the rights or property of Bank of SUN To prevent or investigate possible wrong doing in connection with the Service To protect the personal safety of users of the Service or the public
                          To protect against legal liability<br /><br /><strong>Security Of Data</strong><br /><br />The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage
                          is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.<br /><br /><strong>Service Providers</strong><br /><br />We may employ third party companies
                          and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.These third parties have access
                          to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.<br /><br /><strong>Links To Other Sites</strong><br /><br />Our Service may contain links to other sites
                          that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.We have no control over and assume
                          no responsibility for the content, privacy policies or practices of any third party sites or services.<br /><br /><strong>Children's Privacy</strong><br /><br />Our Service does not address anyone under the age of 18 ("Children").We
                          do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we
                          become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.Changes To This Privacy PolicyWe may update our Privacy Policy
                          from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update
                          the "effective date" at the top of this Privacy Policy.You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.<br /><br /><strong>Contact Us</strong><br /><br />If
                          you have any questions about this Privacy Policy, please contact us:<br />By phone number: 021594892<br /><br /></p>
                        <figure>
                          <figcaption />
                        </figure>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highlight-clean" style={{backgroundColor: 'rgba(255,255,255,0)'}}>
                <div className="container">
                  <div className="intro">
                    <p className="text-center" />
                  </div>
                  <div className="buttons" />
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
 
export default Policy;