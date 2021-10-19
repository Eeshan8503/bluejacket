import React, {useState} from 'react'
import logo from './../../assets/logo.png'
import Ham from './Hamburger/ham'
import './stylesheets/navbarmob.css'
const NavbarMob = () => {
    const [toggle, settoggle] = useState(false)
    function toggler(){
        settoggle(!toggle)
    }
    return (
        <div>
            <div className="navbarr">
                <div onClick={toggler}><Ham/></div>
                <img className="logo" src={logo} alt="LOGO" height="100px" width="100px" />
            </div>
            <div className="contents" style={toggle?{display:"flex"}:{display:"none"}}>
                <p>Home</p>
                <p>Tracker</p>
                <img className="userDpp" src={logo} alt="user" height="50px" width="50px"/>
            </div>
        </div>
    )
}

export default NavbarMob;
