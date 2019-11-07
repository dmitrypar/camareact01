import React from 'react';
import classes from './Navbar.module.css';

const Navbar=()=> {
    return (
        <nav className={classes.nav}>
            <ul>
                <a href="#">
                    <li className={classes.item}>Messages</li>
                </a>
                <a href="#">
                    <li className={classes.item}>News</li>
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