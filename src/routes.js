import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login/App';
import Home from './Pages/Home/App';
import { PokemonsProvider } from './Contextos/Pokemons';

function AppRoutes() {
    const [loggedIn, setLoggedIn] = useState(true);

    const handleLogin = () => {
        setLoggedIn(true);
        // Redirect to Home
        window.location.href = "/home";
    };

    return (
        <BrowserRouter>
            {/* <UserProvider> */}
            <PokemonsProvider>
                {/* <PokedexProvider> */}
                <Routes>
                    <Route
                        path="/"
                        element={!loggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/home" />}
                    />
                    <Route
                        path="/home"
                        element={!loggedIn ? <Navigate to="/" /> : <Home />}
                    />
                    {/* <Route path="/detail/:pokemonId" component={DetailPage} /> */}
                    {/* <Route path="/cadastro" component={CadastroPage} /> */}
                    {/* <Route path="/pokedex" component={PokedexPage} /> */}
                    {/* <Route path="/quiz" component={QuizPage} /> */}
                </Routes>
                {/* </PokedexProvider> */}
            </PokemonsProvider>
            {/* </UserProvider> */}
        </BrowserRouter>
    );
}

export default AppRoutes;
