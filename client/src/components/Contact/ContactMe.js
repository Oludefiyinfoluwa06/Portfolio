import React from 'react';
import { FaEnvelope, FaHome, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <div className='contact-me'>
            <div className="contact-address">
                <div className="address">
                    <div className="icon">
                        <FaPhoneAlt />
                    </div>
                    <div className="location">
                        <p>Phone:</p>
                        <p>+234 815 231 4660</p>
                    </div>
                </div>
                <div className="address">
                    <div className="icon">
                        <FaEnvelope />
                    </div>
                    <div className="location">
                        <p>Email:</p>
                        <p>oludefiyinfoluwa06@gmail.com</p>
                    </div>
                </div>
                <div className="address">
                    <div className="icon">
                        <FaHome />
                    </div>
                    <div className="location">
                        <p>Location:</p>
                        <p>FCT, Abuja</p>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    );
}

export default ContactMe;
