import React from 'react';
import './Animal.css';

function Animal({name, species, age, image}) {
    return (
        <div className="animal">
            <div className="animals-cards">
                <img className="animal-img" src={image} alt={name} />
                <div className="animal-desc">
                    <h3>{name}</h3>
                    <span>Espéce: {species} </span>
                    <span>Âge : {age} </span>
                </div>
            </div>
        </div>
    )
}

export default Animal;
