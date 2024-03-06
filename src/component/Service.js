import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button';
import './Services.css';

export default class Service extends Component {
  render() {
    return (
     <>
          <div className='services_image'>
            <h1 className='abt'>OUR SERVICES</h1>
           
            <p className='abt'><b>At Tramsco, we provide a wide array of services categorised into thse major areas of</b><br/>
            <b>expertise:</b>
            <ul>
                <li><b>Freight Fowarding</b></li>
                <li><b>Haulaging</b></li>
                <li><b>Custom Brokerage</b></li>
            </ul>
            </p>
        </div>
         <br/>
         <br/>
         <br/>
         <br/>
         <div className='freight_image'>
            <img className='freight_images' src='fowarder.jpg' alt='pic'></img>
            <h1 className='h1_freight'>Freight Forwarding</h1>
            <p className='h1_text'>Arranging the import and export clearance of goods for our clients through agencies and ensuring<br/> that all the rule and regulations in the industry are 
                being followed to streamline the clearance process.<br/><br/>
                We cater for both individuals and organisations alike and ensuring that their paperwork is processed in a procedural manner, which goes to protect our customers and delivering them quality service without hassle.</p>
        </div> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='land_transport'>
          <img className='container_image' src='container_t.jpg'></img>
          <h1 className='h2_land'> Haulage Services</h1>
          <p className='h2_text'>Arranging the import and export clearance of goods for our clients through agencies<br/> and ensuring that
           all the rule and regulations in the industry are 
                being followed to <br/> streamline the clearance process.
                We use pickups and big trailers for local land <br/>transportation services by providing tracking services to clients upon request.</p>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='customs'>
          <img className='customs_image' src='custom.jpg'></img>
          <h1 className='h3_customs'>Custom Brokage</h1>
          <p className='h3_text'> Tramsco is licensed and have the expertise to quickly move your goods
             in compliance with<br/> Ghana customs and import regulations.
              All customs formalities carried out to get goods<br/> out of ports which includes customs inspection,
             customs examination with physical means<br/> i.e export and import clearance.</p>
        </div>
        <br/>
        <br/>
        <div className='do_business'>
            <h3 className='h3_business'>Do Business with Tramsco</h3>
            <p className='h3_texts'>From freight to logistics,we are hapy to bring our<br/>
            expertise and experience to board with you.Feel free to reach out.We will be
            glad to have you as a partner.<br/><br/>
            <Button className='get_in_touch'> Get in touch  </Button>
            </p>
            </div>
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
