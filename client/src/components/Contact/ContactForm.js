import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    const [msg, setMsg] = useState();

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('https://oludefiyinfoluwa-server.vercel.app/', { name, email, message });
            setMsg(res.data.message);
            window.location.reload();
        } catch (err) {
            console.log(err);
            if (err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            }
        }
    }


    return (
        <form>
            <p style={ msg ? { position: 'fixed', top: 0, left: 0, padding: 10, width: '100%', background: 'green', color: '#fff', textAlign: 'center' } : { display: 'none' }}>{msg}</p>
            <div className="form-group">
                <p style={ error ? { textAlign: 'center', color: '#FF9999', width: '100%' } : { display: 'none' }}>{error}</p>
                <div className="input-box">
                    <label htmlFor="name">Your name</label>
                    <input type="text" id='name' name='name' onChange={e => setName(e.target.value)} value={name} />
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email' onChange={e => setEmail(e.target.value)} value={email} />
                </div>
            </div>
            <div className="input-box">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" onChange={e => setMessage(e.target.value)} value={message}></textarea>
            </div>
            <button onClick={handleClick}>Submit</button>
        </form>
    );
}

export default ContactForm;
