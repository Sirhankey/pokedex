import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login/App';
import Home from './Pages/Home/App';
import { PokemonsProvider } from './Contextos/Pokemons';
import Detail from './Pages/Detail/App';
import Header from './Components/Header/App';
import Footer from './Components/Footer/App';

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
                <Header isLoggedIn={loggedIn} />
                <Routes>
                    <Route
                        path="/"
                        element={!loggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/home" />}
                    />
                    <Route
                        path="/home"
                        element={!loggedIn ? <Navigate to="/" /> : <Home />}
                    />
                    <Route
                        path="/detail/:id"
                        element={!loggedIn ? <Navigate to="/" /> : <Detail />}
                    />
                    {/* <Route path="/detail/:pokemonId" component={DetailPage} /> */}
                    {/* <Route path="/cadastro" component={CadastroPage} /> */}
                    {/* <Route path="/pokedex" component={PokedexPage} /> */}
                    {/* <Route path="/quiz" component={QuizPage} /> */}
                </Routes>
                <Footer />
                {/* </PokedexProvider> */}
            </PokemonsProvider>
            {/* </UserProvider> */}
        </BrowserRouter>
    );
}

export default AppRoutes;
