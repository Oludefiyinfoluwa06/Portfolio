import React from 'react';
import '../assets/styles/Contact.css';
import ContactMe from '../components/Contact/ContactMe';

const Contact = () => {
    return (
        <div className='contact'>
            <h3>Get in touch</h3>
            <p className='cont-info'>I'm eager to hear from you. Whether you have questions, project inquiries, or just want to say hello, feel free to get in touch</p>
            <ContactMe />
        </div>
    );
}

export default Contact;
