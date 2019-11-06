import React from 'react';
import classes from './Navbar.module.css';

const Navbar=()=> {
    return (
        <nav className={classes.nav}>
            <ul>
                <a href="/profile">
                    <li className={classes.item}>Profile</li>
                </a>
                <a href="/dialogs">
                    <li className={classes.item}>Dialogs</li>
                </a>
                <a href="#">
                    <li className={classes.item}>Music</li>
                </a>
                <a href="#">
                    <li className={classes.item}>Settings</li>
                </a>

            </ul>
        </nav>
    )
};

    export default Navbar;