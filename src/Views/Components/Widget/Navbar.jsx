import React from 'react'
import Add from '../../../img/NavbarIcons/AddConv.png'
import Home from '../../../img/NavbarIcons/Home.png'
import Battery from '../../../img/NavbarIcons/Battry.png'
import Call from '../../../img/NavbarIcons/Call.png'
import Write from '../../../img/NavbarIcons/WriteStatus.png'
import Large from '../../../img/NavbarIcons/LargeScreen.png'
const Navbar = () => {
  return (
    <>
        <div className="Nav">
            <div className="NavContent">
                <img src={Home} alt=""/>
                <img src={Add} alt=""/>
                <img src={Call} alt=""/>
                <img src={Write} alt=""/>
                <img src={Battery} alt=""/>
                <img src={Large} alt=""/>

            </div>
        </div>
    </>
  )
}

export default Navbar
