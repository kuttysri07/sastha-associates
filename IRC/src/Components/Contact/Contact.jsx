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
        <p className="contact-detail">Thindal, Erode </p>
      </div>

      <div className="contact-item">
        <div className="icon">
          <img src={phone} alt="Call Us" />
        </div>
        <h3>CALL US</h3>
        <p>Saastha Associates Office</p>
       
        <a href="tel:+919363412625 " className='contact-detail'> +91 93634 12625  </a> <br />

        <a href="tel:+918643013005 " className='contact-detail'> +91 86430 13005</a>
      </div>

      <div className="contact-item">
        <div className="icon">
          <img src={mail} alt="Message Us" />
        </div>
        <h3>MAIL US</h3>
        <p className="contact-detail"></p>

        <a href="mailto:info@saastha.com" className='contact-detail'>srisastaassociates@gmail.com</a>
      </div>
    </div>
    </Fragment>
   
  );
}

export default Contact;
