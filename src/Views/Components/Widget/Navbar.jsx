import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter, faDownLeftAndUpRightToCenter, faCog } from '@fortawesome/free-solid-svg-icons';

import Add from '../../../img/NavbarIcons/AddConv.png';
import Home from '../../../img/NavbarIcons/Home.png';
import Battery from '../../../img/NavbarIcons/Battry.png';
import Call from '../../../img/NavbarIcons/Call.png';
import Write from '../../../img/NavbarIcons/WriteStatus.png';

import ProfileSettings from '../ProfileSettings'; // Importez votre composant ProfileSettings ici
import Radios from '../Radios'; // Importez votre composant Radios ici

const Navbar = () => {
    const [showComponents, setShowComponents] = useState(false);
    const [icon, setIcon] = useState(faUpRightAndDownLeftFromCenter);

    const toggleComponents = () => {
        setShowComponents(!showComponents);
        setIcon(showComponents ? faUpRightAndDownLeftFromCenter : faDownLeftAndUpRightToCenter);
    };

    return (
        <>
            <div className="Nav">
                <div className="NavContent">
                    <img src={Home} alt=""/>
                    <img src={Add} alt=""/>
                    <img src={Call} alt=""/>
                    <img src={Write} alt=""/>
                    <img src={Battery} alt=""/>

                    <div className="fontA">
                        <FontAwesomeIcon icon={icon} onClick={toggleComponents}  className="fontA"/>
                    </div>
                </div>
            </div>

            {/* Utilisez un état pour afficher les composants */}
            {showComponents && (
                <>
                    <ProfileSettings />
                    <Radios />
                </>
            )}
        </>
    );
};

export default Navbar;
