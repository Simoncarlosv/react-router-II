import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(false);  // Inicialmente no hay token

    const login = () => setToken(true);  // Función para simular el inicio de sesión
    const logout = () => setToken(false);  // Función para simular el cierre de sesión

    return (
        <UserContext.Provider value={{ token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};