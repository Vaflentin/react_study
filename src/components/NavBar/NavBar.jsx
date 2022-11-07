import React from "react";
import { NavLink } from "react-router-dom";
import c from './NavBar.module.css';
import './css.css';


/* const setActive = ({isActive}) => isActive ? 'active-link' : ''; */

const NavBar = () => {
    return (
        <nav className={c.navBar}>

            <div className={c.navBarItem}>
                <NavLink to='/'> Profile</NavLink>
            </div>
            <div className={c.navBarItem}>
                <NavLink to='/dialogs' >Messages</NavLink>
            </div>
            <div className={c.navBarItem}>
                <a>News</a>
            </div>
            <div className={c.navBarItem}>
                <a>Music</a>
            </div>
            <div className={c.navBarItem}>
                <a>Settings</a>
            </div>

        </nav>

    )
};
export default NavBar