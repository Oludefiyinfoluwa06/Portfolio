import React from 'react';

const ContactForm = () => {
    return (
        <form>
            <div className="form-group">
                <div className="input-box">
                    <label htmlFor="name">Your name</label>
                    <input type="text" id='name' name='name' />
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email' />
                </div>
            </div>
            <div className="input-box">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default ContactForm;
