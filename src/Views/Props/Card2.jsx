import React from "react";
import PropTypes from "prop-types"; // Importez PropTypes pour définir les types des props

import '../../scss/Views/Props/Card2.scss'

const Card2 = (props) => {
    return (
        <div className="card2">
            <div className="content">
                {props.image && (
                    <div className="image">
                        <img src={props.image} alt={props.title} />
                    </div>
                )}
                <div className="info">
                    <h2>{props.title}</h2>
                </div>
            </div>
        </div>
    );
}

// Définissez les types des props en utilisant PropTypes
Card2.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string // L'image est facultative, elle peut être une URL d'image
};

export default Card2;
