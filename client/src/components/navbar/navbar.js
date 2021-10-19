import React, {useState} from 'react'
import NavbarComp from './navbarComp'
import NavbarMob from './navbarMob'
const Navbar = () => {
    const init = () => window.innerWidth < 800;
    const [size, setsize] = useState(init);
    function check(){
        if(window.innerWidth<800)
            setsize(true);
        else
            setsize(false);
    }
    window.addEventListener("resize",check);
    return (
        <div>
            {size?<NavbarMob/>:<NavbarComp/>}
        </div>
    )
}

export default Navbar
