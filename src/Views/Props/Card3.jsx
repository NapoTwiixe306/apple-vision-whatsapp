import React from "react";

import '../../scss/Views/Props/Card3.scss'

const Card3 = (props) => {
    return (
        <div className="card3">
            <div className="content">
                {props.image && (
                    <div className="image">
                        <img src={props.image} alt={props.title} />
                    </div>
                )}
                <div className="info">
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    );
}



export default Card3;
