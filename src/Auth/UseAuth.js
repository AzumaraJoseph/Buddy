import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        setIsAuthenticated(authStatus === 'true');
        setLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Clear any authentication data (like tokens) from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return {
        isAuthenticated,
        loading,
        login,
        logout,
    };
};

export default useAuth;
