// Contact.js
import React from 'react';
import HeaderMenu from '../Layout/HeaderMenu';
import Footer from '../Layout/Fotter';


const Contact = () => {
  return (
    <div>
      <HeaderMenu/>
      <h2>Contact Us</h2>
      <p>You can reach us at contact@ourwebsite.com or call us at 123-456-7890.</p>
      {/* Add contact form, map, and other contact details */}
      <Footer/>
    </div>
  );
};

export default Contact;
