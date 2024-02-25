import React, { useState } from 'react';
import './LoginRegistration.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const Navigate = useNavigate();

    let initialUsers = JSON.parse(localStorage.getItem('users'));
    if (!Array.isArray(initialUsers)) {
        initialUsers = [];
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const isExistingUser = initialUsers.some(user => user.userName === userName);
        if (isExistingUser) {
            alert('This username is already in use. Please choose another one.');
            return;
        }

        if (password.length < 5) {
            alert('Password must be at least 5 characters long');
            return;
        }

        const newUser = {
            firstName,
            lastName,
            userName,
            password
        };
        const updatedUsers = [...initialUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        Navigate('/login');
        Swal.fire({
            title: "Registration successful",
            icon: "success"
        });
    };

    return (
        <div className="App">
            <div className="login-container">
                <h2>Register</h2>
                <form onSubmit={handleFormSubmit}>
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        required
                    />
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        required
                    />
                    <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        type="email"
                        name="userName"
                        placeholder="Email Address *"
                        required
                    />
                    <br />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Password (min 5 characters) *"
                        required
                    />
                    <br />
                    <button className='registor_btn1' type='submit'>Register</button>
                    <p className='login_link'> Have already an account? <Link to={'/login'} ><span><b>Login</b></span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
