import React from 'react';
import './Animal.css';

function Animal({name, species, age, image}) {
    return (
        <div className="animal">
            <div className="animals-cards">
                <img className="animal-img" src={image} alt={name} />
                <div>

                </div>
            </div>
        </div>
    )
}

export default Animal;
