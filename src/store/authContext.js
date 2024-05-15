import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(sessionStorage.getItem('token'));

    const handleToken = (newToken) => {
        setToken(newToken);
        sessionStorage.setItem('token', newToken);
    };

    const removeToken = () => {
        setToken(null);
        sessionStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ token, handleToken, removeToken }}>
        {children}
        </AuthContext.Provider>
    );
};