import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button';
import './Services.css';
import Footer from './Footer';

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
            <img className='freight_images' src='./images/fowarder.jpg' alt='pic'></img>
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
          <img className='container_image' src='./images/container_t.jpg'></img>
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
          <img className='customs_image' src='./images/custom.jpg'></img>
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
            <Footer/>
     </>
    )
  }
}
