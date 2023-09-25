import React from 'react';

const Discussion = () => {
    return  (
        <>
            <div className="Discussion">
                <div className="MessagesSendReceive">
                    <p>Hello Bro, how are you today...</p>
                    <p className="date">8h10</p>
                </div>
                <div className="Receive">
                    <p>Hi Bro, good and you ?</p>
                    <p className="date">8h10</p>
                </div>
                <div className="MessagesSendReceive1">
                    <p>I'm fine thanks, what's up</p>
                    <p className="date">8h13</p>
                </div>
                <div className="Receive1">
                    <p>Hi Bro, good and you ?</p>
                    <p className="date">8h10</p>
                </div>
                <div className="MessagesSendReceive2">
                    <p>I'm stuck on a bug, but nothing new</p>
                    <p className="date">8h15</p>
                </div>
            </div>
        </>
    )
}
export default Discussion;
