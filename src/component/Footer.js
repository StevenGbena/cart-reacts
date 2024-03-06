import React, { Component } from 'react'
import './Footers.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default class Footer extends Component {
  render() {
    return (
      <>
         <div className='footer'>    
        <div className='sb_footer section_padding'>
         <div className='sb_footer-links'>
            <div className='sb_footer-links_div'>
             <h4>Address</h4>
        
                <p>Ground Floor East Wing</p>
                <p>House Of Fame Building</p>
                <p>Tema Community 1, Meridian</p>
             
            
            </div>
            <div className='sb_footer-links_div'>
                <h4>Email:</h4>
              
                <p>tramsco@yahoo.com</p>
                <p>sgbena@yahoo.com</p>
                <p>info@tramsconline.com</p>
            
            </div>
            <div className='sb_footer-links_div'>
                <h4>Partners</h4>
            
                    <p>Tramsco </p>
                    <p>Tramsco </p>
                    <p>Tramsco </p>
               
            </div>
            <div className='sb_footer-links_div'>
                <h4>Phone</h4>
                    <p>+233 246080793</p>
                    <p>+233 24378028</p>
                    <p>+233 24378028</p>

            </div>
            <div className='sb_footer-links_div'>
                <h4>Social Media </h4>
                <div className='socialmedia'>
                  <p><i class='fa-brands fa-instagram ' ></i> </p>  &nbsp;&nbsp;
                 <p><i class='fa-brands fa-facebook size="lg" '></i></p>  &nbsp;&nbsp;
                 <p><i class='fa-brands fa-linkedin'></i></p> 
                {/* <p><FontAwesomeIcon icon={faLinkedin} /></p>
                <p><FontAwesomeIcon icon={faInstagram} /></p>
                <p><FontAwesomeIcon icon={faXTwitter} /></p> */}
                </div>
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
