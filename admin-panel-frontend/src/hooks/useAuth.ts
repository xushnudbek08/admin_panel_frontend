import { createContext, useContext, useEffect, useState } from 'react';
import { decodeToken, isTokenExpired } from '../utils/jwt';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && !isTokenExpired(token)) {
            const decoded = decodeToken(token);
            setUser(decoded);
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        const response = await api.post('/login', credentials);
        const { token } = response.data;
        localStorage.setItem('token', token);
        setUser(decodeToken(token));
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};