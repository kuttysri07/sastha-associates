import React, { Fragment } from 'react';
import './contact.css'; // Import the CSS file for styling
import phone from "../Assets/icons8-phone-100.png"
import location from "../Assets/icons8-location-100.png"
import mail from "../Assets/icons8-mail-100.png"

const Contact = () => {
  return (
    <Fragment>
 <center><h1 className='heading'>We're here to help. Ask away!</h1></center>
    <div className="contact-container">
        
      <div className="contact-item">
        <div className="icon">
          <img src={location} alt="Visit Us" />
        </div>
        <h3>VISIT US</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="contact-detail">Thindal, Erode </p>
      </div>

      <div className="contact-item">
        <div className="icon">
          <img src={phone} alt="Call Us" />
        </div>
        <h3>CALL US</h3>
        <p>Jio Sarani Office</p>
        <p className="contact-detail">+919363412625, 8643013005</p>
      </div>

      <div className="contact-item">
        <div className="icon">
          <img src={mail} alt="Message Us" />
        </div>
        <h3>MASSAGE US</h3>
        <p>Donec leo nunc, tincidunt sed consectetur vel.</p>
        <p className="contact-detail">srisastaassociates@gmail.com</p>
      </div>
    </div>
    </Fragment>
   
  );
}

export default Contact;
