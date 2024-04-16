// AppWrapper.js

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UsuarioProvider } from './Contextos/Usuario';
import { PokemonsProvider } from './Contextos/Pokemons';
import AppRoutes from './routes';

function AppWrapper() {
    return (
        <BrowserRouter>
            <UsuarioProvider>
                <PokemonsProvider> 
                    <AppRoutes />
                </PokemonsProvider>
            </UsuarioProvider>
        </BrowserRouter>
    );
}

export default AppWrapper;
