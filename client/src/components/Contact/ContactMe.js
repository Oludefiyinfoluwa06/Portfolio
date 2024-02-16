import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaEnvelope, FaHome, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from './ContactForm';

const ContactMe = () => {
    const contactAddressRef = useRef(null);
    const contactFormRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const contactAddress = contactAddressRef.current;
        const contactForm = contactFormRef.current;

        contactAddress.classList.remove('visible-contact-address');
        contactForm.classList.remove('visible-contact-form');
        
        setTimeout(() => {
            contactAddress.classList.add('visible-contact-address');
            contactForm.classList.add('visible-contact-form');
        }, 100);
    }, [location.pathname]);
    return (
        <div className='contact-me'>
            <div className="contact-address" ref={contactAddressRef}>
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
            <ContactForm forwardedRef={contactFormRef} />
        </div>
    );
}

export default ContactMe;
