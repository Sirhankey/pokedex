import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateForm();
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        validateForm();
    };

    const validateForm = () => {
        setIsFormValid(email !== '' && password !== '' && password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password));
    };

    const handleLogin = () => {
        if (isFormValid) {
            onLogin();
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}>
            <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" className="w-full border border-gray-300 rounded px-3 py-2" value={email} onChange={handleEmailChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" id="password" className="w-full border border-gray-300 rounded px-3 py-2" value={password} onChange={handlePasswordChange} />
                </div>
                <button className={`w-full bg-red-500 text-white font-bold py-2 px-4 rounded ${isFormValid ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={handleLogin}>
                    <span className="animate-pokeball"></span>
                    Entrar
                </button>
            </div>
        </div>
    );
};

export default Login;
