import React from 'react'
import './stylesheets/navbarcomp.css'
import logo from './../../assets/logo.png'
export const navbarComp = () => {
    return (
        <div>
            <div className="navbar">
                <img className="logo" src={logo} alt="LOGO" height="100px" width="100px" />
                <p>Home</p>
                <p>Tracker</p>
                <img className="userDp" src={logo} alt="user" height="50px" width="50px"/>
            </div>
        </div>
    )
}
export default navbarComp;
