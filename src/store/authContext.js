import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const handleToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    };

    const removeToken = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ token, handleToken, removeToken }}>
        {children}
        </AuthContext.Provider>
    );
};