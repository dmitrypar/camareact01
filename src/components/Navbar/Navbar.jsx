import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar=()=> {
    return (
        <nav className={classes.nav}>
            <ul>
                <NavLink to="/profile">
                    <li className={classes.item}>Profile</li>
                </NavLink>
                <NavLink to="/dialogs">
                    <li className={classes.item}>Dialogs</li>
                </NavLink>
                <NavLink to="/music">
                    <li className={classes.item}>Music</li>
                </NavLink>
                <NavLink to="/settings">
                    <li className={classes.item}>Settings</li>
                </NavLink>

            </ul>
        </nav>
    )
};

    export default Navbar;