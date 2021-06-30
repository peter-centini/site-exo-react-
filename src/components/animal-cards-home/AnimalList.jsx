import React from 'react';
import Animal from './Animal';
import './AnimalList.css';

function AnimalList() {

    const lion = {
        name: "Simba",
        species: "lion",
        age: 2,
        image:"https://media.tenor.com/images/c6edf1156751130557323cb653d11a49/tenor.gif"
    }
    const Pangolin = {
        name: "Bart",
        species: "singe",
        age: 24,
        image:"https://media.tenor.com/images/c6edf1156751130557323cb653d11a49/tenor.gif"
    }
    const Poule = {
        name: "Grenouille",
        species: "barbapapa",
        age: 9,
        image:"https://media.tenor.com/images/c6edf1156751130557323cb653d11a49/tenor.gif"
    }
    return (
        <div className="AnimalList">
          <h2 className="section-title AnimalList-title">Venez faire de belle rencontres!</h2>
             <div className="cards-container">
                 <Animal {...lion} />
                 <Animal {...Pangolin} />
                 <Animal {...Poule}/>
             </div>
        </div>
    )
}

export default AnimalList;
