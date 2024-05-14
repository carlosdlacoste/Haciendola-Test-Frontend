import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container d-flex align-items-center">
                <Link className="navbar-brand" to="/"><h4 className='text-light'>Product Manager</h4></Link>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/login"><button className='btn btn-primary'>Log In</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
