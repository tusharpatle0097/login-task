import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


let hambu = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
    <path stroke="white" d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
</svg>

let cross = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
    <path fill="none" d="M0 0h24v24H0z" />
    <path stroke="white" stroke-width="2" d="M18 6L6 18M6 6l12 12" />
</svg>


const Navbar = () => {

    const Navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const userName = JSON.parse(localStorage.getItem('users'))
    console.log(userName, "///")
    const handlelogout = () => {
        localStorage.removeItem('loggedin');
        Navigate('/login')
        Swal.fire({
            title: "Logout successfully",
            // text: "You clicked the button!",
            icon: "success"
        });
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="centered-content">
                    {
                        userName.map((name, index) => {
                            return (
                                <p key={index} className="logo">Welcome  <span style={{ color: 'red', fontSize: '30px' }} > {name.firstName}</span> </p>
                            )
                        })
                    }
                    <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className='hamBug'>{isOpen ? cross : hambu}</div>
                    </div>

                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <button onClick={handlelogout} className="logout-btn">Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
