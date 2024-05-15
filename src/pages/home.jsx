import React from 'react';
import { useAuth } from '../store/authContext';
import { Login } from './login';
import { Products } from './products';

export const Home = () => {

    const {token} = useAuth()

    return (
        <>
            {!token ?
            <>
                <Login/>
            </>
            :
            <>
                <Products/>
            </>
        }
        </>

    );
};
