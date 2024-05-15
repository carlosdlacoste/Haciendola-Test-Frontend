import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
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
