import React from "react";
import Avatar2 from '../../img/Avatars/Avatar2.png'
import Search from '../../img/Icons/Search.png'
import Settings from '../../img/Icons/Settings.png'
const Messages = () => {
    return (
        <>
            <div className="Rectangle2">
                <div className="infosUsers">
                    <img src={Avatar2} alt=""/>
                    <div className="text">
                        <h2>(310) 185-5245</h2>
                        <p>En ligne aujourd'hui à 9h05</p>
                    </div>
                    <div className="icon">
                        <img src={Search} alt=""/>
                        <img src={Settings} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messages;
