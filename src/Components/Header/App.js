import React from "react";
import { Link } from "react-router-dom";
import { useUsuarioContext } from "../../Contextos/Usuario";
import { deslogarUsuario } from "../../Services/usuario";

function Header({ isLoggedIn, onLogout }) {
    const { usuario, setUsuario } = useUsuarioContext();
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const username = usuario?.email ?? 'Ash Ketchum';

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleLogout = (event) => {
        console.log('event', event);
        event.preventDefault();
        deslogarUsuario(setUsuario);
        onLogout();
    };


    return (
        <header className="bg-gray-900 text-white relative">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
                            alt="Logo"
                            className="h-10 mr-4"
                        />
                    </Link>
                    {isLoggedIn && (
                        <span className="mr-4">Treinador: {username}</span>
                    )}
                </div>

                <button
                    className="block lg:hidden border border-white rounded px-3 py-2 text-white"
                    onClick={toggleMenu}
                >
                    Menu
                </button>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-gray-800 z-10 text-white lg:hidden">
                        <div className="container mx-auto">
                            <ul className="p-4">
                                {isLoggedIn ? (
                                    <>
                                        <li>
                                            <a href="/pokemons">Pokemons</a>
                                        </li>
                                        <li>
                                            <a href="/pokeWho">Quiz</a>
                                        </li>
                                        <li>
                                            <a href="/ranking">Ranking</a>
                                        </li>
                                        <li>
                                            <button onClick={handleLogout}>Logout</button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <a href="/login">Login</a>
                                        </li>
                                        <li>
                                            <a href="/register">Cadastrar</a>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Links de navegação à direita (apenas em desktop) */}
                <div className="hidden lg:flex items-center">
                    <ul className="flex gap-4">
                        {isLoggedIn ? (
                            <>
                                <li>
                                    <Link to="/pokemons">Pokemons</Link>
                                </li>
                                <li>
                                    <Link to="/pokeWho">Quiz</Link>
                                </li>
                                <li>
                                    <Link to="/ranking">Ranking</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Cadastrar</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
