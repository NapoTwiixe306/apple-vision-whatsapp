import React from "react";
import Avatar2 from '../../img/Avatars/Avatar2.png'

import '../../scss/Views/Props/Card.scss'
const Card = (props) => {
    return (
      <div className="card">
          <div className="content">
              <img src={Avatar2} alt={props.alt}/>
              <div className="info">
                  <h2>{props.title}</h2>
                  <p>{props.description}</p>
              </div>
          </div>
      </div>
    );
}

export default Card;
