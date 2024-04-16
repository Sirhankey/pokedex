import React from "react";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, username }) {
    const [isMenuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
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

                {/* Menu Sanduíche para dispositivos móveis */}
                <button
                    className="block lg:hidden border border-white rounded px-3 py-2 text-white"
                    onClick={toggleMenu}
                >
                    Menu
                </button>

                {/* Dropdown para dispositivos móveis */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-gray-800 z-10">
                        <div className="container mx-auto">
                            <ul className="p-4">
                                {isLoggedIn ? (
                                    <>
                                        <li>
                                            <a href="/pokemons">Pokemons</a>
                                        </li>
                                        <li>
                                            <a href="/quiz">Quiz</a>
                                        </li>
                                        <li>
                                            <a href="/ranking">Ranking</a>
                                        </li>
                                        <li>
                                            <a href="/logout">Logout</a>
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
            </div>
        </header>
    );
}

export default Header;
