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
// The terms component is also static, as it only provides details about the Terms and Conditions of Bank of SUN
class Terms extends Component {
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
              <div className="article-clean" style={{background: 'linear-gradient(135deg, #172a74, #21a9af)'}}>
                <div className="container">
                  <div className="row" style={{backgroundColor: 'rgba(255,255,255,0)'}}>
                    <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                      <div className="intro">
                        <h1 className="text-center" style={{color: 'rgb(255,255,255)', fontFamily: '"Source Sans Pro", sans-serif'}}>Terms and Conditions</h1>
                        <p className="text-center"><span className="by" /> </p>
                      </div>
                      <div className="text">
                        <h2 />
                        <p style={{color: 'rgb(255,255,255)', fontFamily: '"Source Sans Pro", sans-serif'}}><strong>Welcome to Bank of SUN </strong><br /> These terms and conditions outline the rules and regulations for the use of Bank of SUN's Website. <br /> Bank of SUN is located at: <br /> Die Neelsie, Stellenbosch Stellenbosch, Cape TownWestern
                          Cape - 7600, South Africa <br /> <br /> By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Bank of SUN's website if you do not accept all of the terms and conditions stated
                          on this page. <br /> The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice <br /> and any or all Agreements: “Client”, “You” and “Your” refers to you, the person accessing this
                          website <br /> and accepting the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers <br /> to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the
                          Client <br /> or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake <br /> the process of our assistance to the Client in the most appropriate manner, whether by formal meetings
                          <br /> of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect <br /> of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law <br />                            of South Africa. Any use of the above terminology or other words in the singular, plural, <br /> capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.Cookies <br /> We employ the
                          use of cookies. By using Bank of SUN's website you consent to the use of cookies <br /> in accordance with Bank of SUN’s privacy policy.Most of the modern day interactive web sites <br /> use cookies to enable us to retrieve user
                          details for each visit. Cookies are used in some areas of our site <br /> to enable the functionality of this area and ease of use for those people visiting. Some of our <br /> affiliate / advertising partners may also use cookies.License
                          <br /> Unless otherwise stated, Bank of SUN and/or it’s licensors own the intellectual property rights for <br /> all material on Bank of SUN. All intellectual property rights are reserved. You may view and/or print <br /> pages
                          from http://www.bankofsun.co.za for your own personal use subject to restrictions set in these terms and conditions. <br /> You must not: <br /> <br /> Republish material from http://www.bankofsun.co.za <br /> Sell, rent or sub-license
                          material from http://www.bankofsun.co.za <br /> Reproduce, duplicate or copy material from http://www.bankofsun.co.za <br /> <br /> Redistribute content from Bank of SUN (unless content is specifically made for redistribution). <br />Hyperlinking
                          to our Content <br /> <br /> The following organizations may link to our Web site without prior written approval: <br /> <br /><strong>   Government agencies; </strong><br /><strong>   Search engines; </strong><br /><strong>   News organizations; </strong><br /><strong>   Online directory distributors when they list us in the directory may link to our Web site in the same </strong><br /><strong>    manner as they hyperlink to the Web sites of other listed businesses; and </strong><br /><strong>   Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, </strong><br /><strong>    and charity fundraising groups which may not hyperlink to our Web site. </strong><br />                            <br /> <br /> <br /> <br /> These organizations may link to our home page, to publications or to other Web site information so long <br /> as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement
                          or <br /> approval of the linking party and its products or services; and (c) fits within the context of the linking <br /> party's site. <br /> <br /> We may consider and approve in our sole discretion other link requests from the
                          following types of organizations: <br /> <br /> commonly-known consumer and/or business information sources such as Chambers of Commerce, American <br /> Automobile Association, AARP and Consumers Union; <br /> dot.com community sites;
                          <br /> associations or other groups representing charities, including charity giving sites, <br /> online directory distributors; <br /> internet portals; <br /> accounting, law and consulting firms whose primary clients are businesses;
                          and <br /> educational institutions and trade associations. <br /> <br /> <br /> <br /> We will approve link requests from these organizations if we determine that: (a) the link would not reflect <br /> unfavorably on us or our accredited
                          businesses (for example, trade associations or other organizations <br /> representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed <br /> to link); (b)the organization does not
                          have an unsatisfactory record with us; (c) the benefit to us from <br /> the visibility associated with the hyperlink outweighs the absence of ; and (d) where the <br /> link is in the context of general resource information or
                          is otherwise consistent with editorial content <br /> in a newsletter or similar product furthering the mission of the organization. <br /> <br /> These organizations may link to our home page, to publications or to other Web site
                          information so long as <br /> the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval <br /> of the linking party and it products or services; and (c) fits within the context
                          of the linking party's <br /> site. <br /> <br /> If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, <br /> you must notify us by sending an e-mail to bankofsun@gmail.com. <br />                            Please include your name, your organization name, contact information (such as a phone number and/or e-mail <br /> address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, <br />                            and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response. <br /> <br /> Approved organizations may hyperlink to our Web site as follows: <br /> <br /> <br /><strong>  By use of our corporate name; or </strong><br /><strong>  By use of the uniform resource locator (Web address) being linked to; or </strong><br /><strong>  By use of any other description of our Web site or material being linked to that makes sense within the </strong><br /><strong>   context and format of content on the linking party's site. </strong><br />                            <br /> No use of Bank of SUN’s logo or other artwork will be allowed for linking absent a trademark license <br /> agreement. <br />Iframes <br /> Without prior approval and express written permission, you may not create frames around
                          our Web pages or <br /> use other techniques that alter in any way the visual presentation or appearance of our Web site. <br />Reservation of Rights <br /> We reserve the right at any time and in its sole discretion to request that
                          you remove all links or any particular <br /> link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also <br /> reserve the right to amend these terms and conditions and its linking
                          policy at any time. By continuing <br /> to link to our Web site, you agree to be bound to and abide by these linking terms and conditions. <br />Removal of links from our website <br /> If you find any link on our Web site or any
                          linked web site objectionable for any reason, you may contact <br /> us about this. We will consider requests to remove links but will have no obligation to do so or to respond <br /> directly to you. <br /> Whilst we endeavour to
                          ensure that the information on this website is correct, we do not warrant its completeness <br /> or accuracy; nor do we commit to ensuring that the website remains available or that the material on the <br /> website is kept up
                          to date. <br />Content Liability <br /> We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify <br /> and defend us against all claims arising out of or based upon your Website.
                          No link(s) may appear on any <br /> page on your Web site or within any context containing content or materials that may be interpreted as <br /> libelous, obscene or criminal, or which infringes, otherwise violates, or advocates
                          the infringement or <br /> other violation of, any third party rights. <br />Disclaimer <br /> To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and
                          the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will: <br />                            <br /> limit or exclude our or your liability for death or personal injury resulting from negligence; <br /> limit or exclude our or your liability for fraud or fraudulent misrepresentation; <br /> limit any of our or your liabilities
                          in any way that is not permitted under applicable law; or <br /> exclude any of our or your liabilities that may not be excluded under applicable law. <br /> <br /> The limitations and exclusions of liability set out in this Section
                          and elsewhere in this disclaimer: (a) <br /> are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or <br /> in relation to the subject matter of this disclaimer, including liabilities
                          arising in contract, in tort <br /> (including negligence) and for breach of statutory duty. <br /> To the extent that the website and the information and services on the website are provided free of charge, <br /> we will not be
                          liable for any loss or damage of any nature. <br /> <br /> <br />Credit &amp; Contact Information <br /> This Terms and conditions page was created at termsandconditionstemplate.com generator. If you have <br /> any queries regarding
                          any of our terms, please contact us.<br /></p>
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
 
export default Terms;