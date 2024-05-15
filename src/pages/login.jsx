import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../store/authContext';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {handleToken} = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                handleToken(data.token);
                navigate('/');
            } else {
                setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
        setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="container mt-5">
        <h2 className="mb-4">Iniciar Sesión</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <div>
            <div className="mb-3">
            <label htmlFor="username" className="form-label">Nombre de Usuario</label>
            <input type="text" className="form-control" id="username" placeholder="Ingrese su nombre de usuario" value={username || ''} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" value={password || ''} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="button" onClick={(e) => handleLogin(e)} className="btn btn-primary">Iniciar Sesión</button>
        </div>
        </div>
    );
};
