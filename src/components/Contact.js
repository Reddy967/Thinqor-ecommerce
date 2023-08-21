import React from 'react';
import '../Styles/contact.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 style={{color:'orange'}}>Contact Us</h1>
      <div className="contact-form">
        <input type="text" name="Name" placeholder="Your Name" />
        <input type="email" name='Email' placeholder="Your Email" />
        <input type='text' name='Phonenumber' placeholder='Your Number'/>
        <input type='text' name='Subject' placeholder='Your Concern Subject'/>
        <input type='text' name='Question' placeholder='Your Question'/>
        <textarea placeholder="Your Message" rows="4" />
        <button href="#">Send Message</button>
      </div>
      <div className="map">
        {/* Replace the iframe src with your actual map embed code */}
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31472.15732160039!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM0JzM3LjAiTiAxNjnCsDUzJzQ1LjQiVw!5e0!3m2!1sen!2sus!4v1600761783541!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
