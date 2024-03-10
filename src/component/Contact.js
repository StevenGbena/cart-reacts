import React, { Component } from 'react'
import './Contact.css';
import Footer from './Footer';
export default class Contact extends Component {
  render() {
    return (
        <>
        <div className='contact_image'>
            <div className='textings'>
            <h1 className='h1_contact'>CONTACT US</h1>
            <p className='h1_text'>We are always open for business.Kindly reach out to us and well will
                be pleased to do<br/> business with you.
            </p>
            </div>
          
        </div>
        <br/>
        <br/>
        <br/>
        {/* <div className='map-responsive'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.52001748303!2d-0.0033098898250862557!3d5.637620494319986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8759776aba39%3A0x401bce73670a39ff!2sHouse%20of%20Fame!5e0!3m2!1sen!2sgh!4v1709038699646!5m2!1sen!2sgh"
         width="600" height="450"  allowFullScreen=""
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          title='Responsive Google Map'
          ></iframe>
        </div> */}
    
    <div className='container'>
    <h1>Send Us a Message</h1>
        <form>
            <div className='row'>
            <div className='col-25'>
            <label form='fname'></label>
            </div>
            <div className='col-75'>
            <input className='inputs'type='text' id='name' name='name' placeholder='Your name' required
            ></input>
            </div>
            </div>
            <div className='row'>
            <div className='col-25'>
            <label for='email'></label>
            </div>
            <div className='col-75'>
            <input className='email' type='text' id='email' name='email' placeholder='Your email' required></input>
            </div>
            </div>
            <div className='row'>
            <div className='col-25'>
             <label  className='service_name'   for='services'>Services Types</label>
            </div>
            </div>
            <div className='col-75'>
                <select className='serv' id='service' name='service'>
                <option value='Freight Forwarding'></option>
                    <option value='freight'>Freight Fowarding</option>
                    <option value='freight'>Haulage</option>
                    <option value='freight'>Customs Brokage</option>
                </select>
            </div>
            <div className='row'>
            <div className='col-25'>
            <label for='message'></label>
            </div><br/>
            <div className='col-75'>
                <textarea className='text_area' id='message' name='message' placeholder='Message..'></textarea>
            </div>
            </div>
            <br/>
            <div className='row'>
                <input className='buttonss' type='submit' value='SEND'></input>
            </div>
        </form>
        
       
    </div>




        
             <div className='map-responsive'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.52001748303!2d-0.0033098898250862557!3d5.637620494319986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8759776aba39%3A0x401bce73670a39ff!2sHouse%20of%20Fame!5e0!3m2!1sen!2sgh!4v1709038699646!5m2!1sen!2sgh"
             width="600" height="450"  allowFullScreen=""
             loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title='Responsive Google Map'
             ></iframe>
             </div>
 
       <Footer/> 
        </>
        
    
    )
  }
}
