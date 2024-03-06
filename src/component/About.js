import React, { Component } from 'react'
import './Abouts.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Read from './Read';

// import '@fortawesome/fontawesom-free/css/all.min.css';

export default class About extends Component {

    //function for read more
    
  render() {
    return (
        <>
        <div className='image_about'>
        <img  className='about_image' src='./images/tema.jpg' alt='about'></img>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='about_text'>
            <div className='text_page'>
                <h1>About Tramsco</h1>
                <Read/>
            </div>
            <img className='abouts_image'src='./images/gh.jpg' alt='about'></img>

        </div>

        <div className='the_vision'>
        <div className='our-vision'>
        <h1 className='h1_vision'>Our Vision</h1>
        <p className='h1_vision'>Succeeding together with passion</p>
        <br/>
        <br/>
        <h1 className='h2_vision'>Our Mission</h1>
        <p className='h2_vision'>Professsionally manage freight forwarding and Logistics for Client</p>

        <h5 className='h3_vision'>WHY CHOOSE</h5>
        <h1 className='h3_vision'>Tramsco</h1>
        

            <ol class="fa-ul">
    <li><span class="fa-li"><i class="fas fa-spinner fa-pulse fa-xl" size style={{color:'green'}} ></i></span>We ensure complete security</li>
    <li><span class="fa-li"><i class="fas fa-spinner fa-pulse  fa-xl" size style={{color:'green'}}></i></span>Clearance and compliance service</li>
    <li className='right'><span class="fa-li"><i class="fas fa-spinner fa-pulse  fa-xl" size style={{color:'green'}}></i></span>Maintain high ethical standards</li>
    <li className='rights'><span class="fa-li"><i class="fas fa-spinner fa-pulse  fa-xl" size style={{color:'green'}}></i></span>We ensure swfit clearance and delivery</li>
    <li className='far_right'><span class="fa-li"><i class="fas fa-spinner fa-pulse  fa-xl" size style={{color:'green'}}></i></span>We listen to our clients objectives and aspirations and therefore provide <br/>customize solutions.</li>
    <li className='far_right'><span class="fa-li"><i class="fas fa-spinner fa-pulse  fa-xl" size style={{color:'green'}}></i></span>We are innovative and passionate about the work we do</li>
  </ol>

        </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>        
       
        <div className='meet_team'>
            <h1>Meet The Team </h1>
            <div className='column'>
                <div className='card'>
                    <img className='meet_image' src='./images/franklin.jpg' ></img>
                    <div className='container'>
                    
                    </div>
                    <h2>Sitso Gbena</h2>
                        <p className='texting'>CEO & Founder</p>
                        <p className='texting'>Sitso is an ambitious fellow</p>
                        <p className='texting'>sgbena@yahooo.com</p>
                </div>
            </div>

            <div className='column'>
                <div className='card'>
                <img className='meet_image' src='./images/kwesi.jpg'></img>
                <div className='container'>
                </div>
                <h2>Bright Benahs</h2>
                    <p className='texting'>General Manager</p>
                    <p className='texting'>brightgena@yahoo.com</p>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                <img className='meet_image' src='./images/kwesi.jpg'></img>
                <div className='container'>
                
                </div>
                <h2>Christopher Gbena</h2>
                    <p className='texting'>Operations Manager</p>
                    <p className='texting'>chrisgbrna@yahoo.vom</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className='columns'>
                <div className='card'>
                <img className='meet_image' src='./images/feli.jpg'></img>
                <div className='container'>
                  
                </div>
                <h2>Aisha Juan</h2>
                    <p className='texting'>Field Manager</p>
                    <p className='texting'>aishaa@yahoo.com</p>
                </div>
            </div>
            <br/>
            <br/>

          
        </div>


        <br/>
        <br/>
        <br/>
        <br/>
        <div className='do_business'>
            <h3 className='h3_business'>Do Business with Tramsco</h3>
            <p className='h3_text'>From freight to logistics,we are hapy to bring our
            expertise and experience<br/> to board with you.<br/>Feel free to reach out.We will be
            glad to have you as a partner.<br/><br/>
            <Button as={Link} to={'/contact'}className='get_in_touch' > Get in touch  </Button>
            </p>
            </div>
            <br/>
            <br/>
            <br/>

        <div className='footer'>    
        <div className='sb_footer section_padding'>
         <div className='sb_footer-links'>
            <div className='sb_footer-links_div'>
             <h4>For Business</h4>
             <a href='/employer'>
                <p>Employer</p>
             </a>
             <a href='/healthplan'>
                <p>Health Plan</p>
             </a>
             <a href='/individual'>
                <p>Individual</p>
             </a>
            </div>
            <div className='sb_footer-links_div'>
                <h4>Resources</h4>
                <a href='/resources'>
                <p>Resource center</p>
                </a>
                <a href='/resources'>
                <p>Testimonials</p>
                </a>
                <a href='/resources'>
                <p>STV</p>
                </a>
            </div>
            <div className='sb_footer-links_div'>
                <h4>Partners</h4>
                <a href='/employer'>
                    <p>Tramsco </p>
                </a>
            </div>
            <div className='sb_footer-links_div'>
                <h4>Company</h4>
                <a href='/about'>
                    <p>About</p>
                </a>
                <a href='/press'>
                    <p>Press</p>
                </a>
                <a href='/career'>
                    <p>Career</p>
                </a>
                <a href='/contact'>
                    <p>Contact</p>
                </a>
            </div>
            <div className='sb_footer-links_div'>
                <h4>Coming soon </h4>
                {/* <div className='socialmedia'>
                 <p><FontAwesomeIcon icon={faFacebook} /></p>   
                <p><FontAwesomeIcon icon={faLinkedin} /></p>
                <p><FontAwesomeIcon icon={faInstagram} /></p>
                <p><FontAwesomeIcon icon={faXTwitter} /></p>
                </div> */}
            </div>
         </div>
        </div>

        <hr></hr>

        <div className='sb_footer-below'>
         <div className='sb_footer-copyright'>
            <p>
                @{new Date().getFullYear()} SteveTech. All right reserved.
            </p>

         </div>
         <div className='sb_footer-below-links'>
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
            <a href='/privacy'><div><p>Privacy</p></div></a>
            <a href='/terms'><div><p>Security</p></div></a>
            <a href='/terms'><div><p>Cookie Declaration</p></div></a>
         </div>
        </div>
        </div>


       
        
        </>
    )
  }
}
