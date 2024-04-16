import React, { createContext, useContext, useState } from 'react';

export const LoginContext = createContext();
LoginContext.displayName = 'Login';


export function LoginProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => {
        setLoggedIn(true);
    };

    const logout = () => {
        setLoggedIn(false);
    };

    return (
        <LoginContext.Provider
            value={{ loggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

export function useLoginContext() {
    console.log("entrando no useLoginContext")
    
    const { loggedIn, login, logout } = useContext(LoginContext);

    return { loggedIn, login, logout };
}