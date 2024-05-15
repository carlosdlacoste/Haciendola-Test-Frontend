import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/authContext';

export const Navbar = () => {
    const { token, removeToken } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container d-flex align-items-center">
                <Link className="navbar-brand" to="/"><h4 className='text-light'>Product Manager</h4></Link>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        {token ?
                        <>
                            <button className='btn btn-danger' onClick={removeToken}>Log Out</button>
                        </>
                        :
                        <>
                            <Link className="nav-link" to="/login"><button className='btn btn-primary'>Log In</button></Link>
                        </>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};
