import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login/App';
import Home from './Pages/Home/App';
import Detail from './Pages/Detail/App';
import Header from './Components/Header/App';
import Footer from './Components/Footer/App';
import PokeWho from './Pages/PokeWho/App';
import { UsuarioProvider } from './Contextos/Usuario';
import { PokemonsProvider } from './Contextos/Pokemons';

function AppRoutes() {
    console.log('Log antes do erro!');
    const [loggedIn, setLoggedIn] = useState(true);

    const handleLogin = (onLogin) => {
        if (onLogin) {
            console.log('onLogin', onLogin)
            setLoggedIn(true);
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('email', onLogin.email);

        }
    };

    const handleLogout = (onLogout) => {
        if (onLogout) {
            setLoggedIn(false);
            localStorage.setItem('loggedIn', 'false');
        }
    };

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('loggedIn');
        if (loggedInStatus === 'true') {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    return (
        <BrowserRouter>
            <UsuarioProvider>
                <PokemonsProvider>
                    <Header isLoggedIn={loggedIn} onLogout={handleLogout} />
                    <Routes>
                        <Route
                            path="/login"
                            element={!loggedIn ? <Login onLogin={handleLogin} /> : <Home />}
                        />
                        <Route
                            path="/"
                            element={!loggedIn ? <Login onLogin={handleLogin} /> : <Home />}
                        />
                        <Route
                            path="/home"
                            element={loggedIn ? <Home /> : <Navigate to="/" />}
                        />
                        <Route
                            path="/detail/:id"
                            element={loggedIn ? <Detail /> : <Navigate to="/" />}
                        />
                        <Route
                            path="/pokeWho"
                            element={loggedIn ? <PokeWho /> : <Navigate to="/" />} />
                    </Routes>
                    <Footer />
                </PokemonsProvider>
            </UsuarioProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;
