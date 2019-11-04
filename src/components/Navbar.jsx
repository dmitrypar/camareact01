import React from 'react';
import  './Navbar.css';

const Navbar=()=> {
    return (
        <nav className='nav'>
            <ul>
                <a href="#">
                    <li>Messages</li>
                </a>
                <a href="#">
                    <li>News</li>
                </a>
                <a href="#">
                    <li>Music</li>
                </a>
                <a href="#">
                    <li>Settings</li>
                </a>

            </ul>
        </nav>
    )
};

    export default Navbar;