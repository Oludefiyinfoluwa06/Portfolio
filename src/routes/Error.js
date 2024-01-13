import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Error.css';

const Error = () => {
    return (
        <div className='error'>
            <h1 className="not-found">
                404
            </h1>
            <p>Page not found. Go to <Link to='/'>Homepage</Link></p>
        </div>
    );
}

export default Error;
