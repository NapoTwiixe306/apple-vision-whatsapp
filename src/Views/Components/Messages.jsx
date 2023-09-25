import React from "react";
import Avatar2 from '../../img/Avatars/Avatar2.png'
import Search from '../../img/Icons/Search.png'
import Settings from '../../img/Icons/Settings.png'
import Add from '../../img/Icons/Messages/AddFiles.png'
import Emoji from '../../img/Icons/Messages/Emoji.png'
import Send from '../../img/Icons/Messages/Send.png'
const Messages = () => {
    return (
        <>
            <div className="UsersI">
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
                <div className="Rectangle3">
                    <div className="InfosWriteMessage">
                        <div className="KeyIcons">
                            <img src={Add} alt=""/>
                            <img src={Emoji} alt=""/>
                        </div>
                        <div className="InputSearch">
                            <input
                                type="search"
                                placeholder="Write your message..."
                                className="MicIcons"
                            />
                        </div>
                        <div className="Send">
                            <img src={Send} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messages;
