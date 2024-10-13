// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching authentication status from local storage or an API
        const authStatus = localStorage.getItem('isAuthenticated');
        setIsAuthenticated(authStatus === 'true');
        setLoading(false);
    }, []);

    const login = (token) => {
        // Save authentication token or status (e.g., token from an API response)
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Clear authentication token or status
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
    };

    return {
        isAuthenticated,
        loading,
        login,
        logout,
    };
};

export default useAuth;
