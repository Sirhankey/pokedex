import React, { useState } from 'react';
import { logarUsuario } from '../../Services/usuario';

const Login = ({ onLogin }) => {
    const [usuario, setUsuario] = useState({ id: null, email: '', password: '' });

    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUsuario((objetoAtual) => ({
            ...objetoAtual,
            [name]: value
        }));
        validateForm();
    }

    const validateForm = () => {
        setIsFormValid(
            usuario.email !== '' &&
            usuario.password !== '' &&
            usuario.password.length >= 6 &&
            /\d/.test(usuario.password) &&
            /[a-zA-Z]/.test(usuario.password));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        logarUsuario(usuario).then((usuario) => {
            if (usuario) {
                onLogin(usuario);
            }
        }).catch((error) => {
            console.error('Erro ao logar', error);
            alert('Erro ao logar');
        });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}>
            <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@email.com"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Senha"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        onChange={handleChange} />
                </div>
                <button
                    type="submit"
                    className={`w-full bg-red-500 text-white font-bold py-2 px-4 rounded ${isFormValid ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    onClick={handleLogin}>
                    <span className="animate-pokeball"></span>
                    Entrar
                </button>
            </div>
        </div>
    );
};

export default Login;
