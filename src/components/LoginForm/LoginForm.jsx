import React, { useState, useEffect } from 'react';
import './LoginRegistration.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const auth = localStorage.getItem('loggedin');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const handleFormLogin = (event) => {
        event.preventDefault();
        let data = {
            userName,
            password
        };
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const loggedInUser = users.find(user => user.userName === data.userName && user.password === data.password);
        if (loggedInUser) {
            localStorage.setItem("loggedin", true);
            navigate('/');
        } else {
            alert('Wrong username or password');
        }
    };

    return (
        <div className="App">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleFormLogin}>
                    <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        name="username"
                        placeholder="Email Id *"
                        required
                    />
                    <br />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Password *"
                        required
                    />
                    <br />
                    <button className='login' type='submit'>Login</button>
                    <br />
                    <p className='register_link'>Don't have an account? <Link to={'/register'} ><span><b>Register Here</b></span></Link></p>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
