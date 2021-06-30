import React from 'react';
import Animal from './Animal';
import './AnimalList.css';

function AnimalList() {

    const lion = {
        name: "Elle",
        species: "La Fille",
        age: 2,
        image:"https://thumbs.gfycat.com/AncientGleamingElephant-max-1mb.gif"
    }
    const Pangolin = {
        name: "Bart",
        species: "Le Father",
        age: 24,
        image:"https://vl-media.fr/wp-content/uploads/2018/04/homer-simpson-reading-GIF-source.gif"
    }
    const Poule = {
        name: "Le sex-Shope",
        species: "barbapapa",
        age: "+19",
        image:"https://media2.giphy.com/media/QN47aXlr2F1DEw1o4M/200.webp?cid=ecf05e47bnwvx250v9xb1osdoh7fem2nsq3k6wt8ca8pni0v&rid=200.webp&ct=g"
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
