import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBox, faPersonMilitaryPointing, faTruck} from '@fortawesome/free-solid-svg-icons';
// import {faBox} from '@fortawesome/free-solid-svg-icons';
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


import './CeoPages.css';
import Footer from './Footer';
// import CounterUpPage from './CounterUpPage';

export default class CeoPage extends Component {
  render() {
    return (
     <>
     <div className='main'>
     <div className='overall'>
      <p className='text'>For more than 27 years now, Conship has been pushing the standards across multiple industries including,<br/>
        but not limited to oil 
        and gas, construction, information technology, mining, just to name a few.</p>
    <img src='feli.jpg' className='client' alt='pics'></img>
      <p className='move'>
      <h2>SITSO GBNEA</h2> 
      FOUNDER & CEO
      </p>
        <div className='the_ceo'>
        <img src='int.jpg' className='ceo_img'  alt='pics'></img><br/>
        </div>
   
        <br/>
       
       
 
    </div>

      <div className='about'>
        <img src='ship.jpg' className='about_images'></img>

        <div className='float_text'>
          <h1>About us</h1>
          <p>
          Tramsco Shipping Agencie Limited is wholly-owned
	        Ghanaian logistics comapny establisehed in <br/>January 196 with service
         	orientation in Domestic Freght Frowarding,International Freight<br/> Forwarding
	          Vessel Agency,Base Operations in Haulage Pick& Delivery,Warehosuing,<br/>Container Freight Station<br/>
            <Button as={Link} to={'/about'}className='' > Read More  </Button>
          </p>
        </div>
      </div>
      <div className='services'>
      <h1 className='h1_service'>Our Services</h1>
      </div>
      <div className='freight'>
        <FontAwesomeIcon icon={faTruck} size='3x' className='freight-icon'/>
        <p className='text-freight'>Freight Forwarding</p>
        <FontAwesomeIcon icon={faCircleArrowRight} size='3x' className='arrow_freight' />
      </div>
      <div className='haulage'>
        <FontAwesomeIcon icon={faBox} size='3x' className='haulage-icon'/>
        <p className='text-haulage'>Haulaging</p>
        <FontAwesomeIcon icon={faCircleArrowRight} size='3x' className='arrow_haulage' />
      </div>
      <div className='custom_brokage'>
        
      <FontAwesomeIcon icon={faPersonMilitaryPointing} size='3x' className='customs-icon' /> 
        <p className='text-customs'>Haulaging</p>
        <FontAwesomeIcon icon={faCircleArrowRight} size='3x' className='arrow_customs' />
      </div>

      {/* <CounterUpPage/> */}
      
       
    
    <div className='why_choose'>
    <h1 className='h1'>Why Choose Us</h1>
    <p className='h_text'>Others may cal it merely experice .We Call it diversity and
      it's what has given us the operate in all our fields of expertise

    </p>
    <br/>
   <FontAwesomeIcon icon={faStar} className='star' size='2x'  /> &nbsp;&nbsp;<FontAwesomeIcon icon={faStar} className='star' size='2x'/>&nbsp;&nbsp;<FontAwesomeIcon icon={faStar} className='star' size='2x' />&nbsp;&nbsp;<FontAwesomeIcon icon={faStar} className='star' size='2x' />&nbsp;&nbsp;<FontAwesomeIcon icon={faStar} className='star' size='2x' />
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='our_afflaition'>
      <h1 className='h1'>Our Affliations</h1><br/><br/><br/>
    <marquee width="100%" direction="left" height="280px">
      <img className='logo' src='gph.png'  alt='pics'></img>&nbsp;&nbsp;&nbsp; <img className='logo' src='porting.png'></img> &nbsp;&nbsp;&nbsp;&nbsp;<img className='logo' src='ceps.jpg'></img> <br/>
   Ghana Shippers<br/> Authority    Ghana Ports& Harbour  Customs Execise & Preventice Service
</marquee>
    </div>
    <br/>
    <br/>
    <br/>
    <div className='do_business'>
      <h1 className='h1_business'>Do Business with Tramsco</h1>
      <p className='business_text'>From freight to logistics,we are hapy to bring our<br/>
            expertise and experience to board with you.Feel free to reach out.We will be
            glad to have you as a partner.<br/><br/>
            <Button as={Link} to={'/contact'}className='get_in_touch' > Get in touch  </Button>
            </p>
    </div>
     </div>
    
    <br/>
   
    
    <Footer/>
    </>
     
    )
  }
}