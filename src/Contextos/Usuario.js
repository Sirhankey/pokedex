import { createContext, useContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuario';

export function UsuarioProvider({ children }) {
    const [usuario, setUsuario] = useState({
        id: null,
        email: '',
        password: ''
    });
    const [estaLogado, setEstaLogado] = useState(false);

    useEffect(() => {
        if (usuario?.id !== null) {
            setEstaLogado(true);
        } else {
            setEstaLogado(false);
        }
    }, [usuario]);

    return (
        <UsuarioContext.Provider
            value={{ usuario, setUsuario, estaLogado }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export function useUsuarioContext() {
    const { usuario, setUsuario, estaLogado } = useContext(UsuarioContext);

    return { usuario, setUsuario, estaLogado };
}
