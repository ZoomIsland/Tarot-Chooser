import React from 'react';
import ThothBackHalved from '../resources/ThothBackHalved.jpg'
import WildUnknownBackHalved from '../resources/WildUnknownBackHalved.jpeg'
import RiderWaiteBackHalved from '../resources/RiderWaiteBackHalved.jpeg'

function DeckChooser(props) {
    const decks = [
        {id: "wild",
         name: "Wild Unknown",
         src: WildUnknownBackHalved},
        {id: "thoth",
         name: "Thoth",
         src: ThothBackHalved},
        {id: "rider",
         name: "Rider-Waite",
         src: RiderWaiteBackHalved}];

    return decks.map((d,i) => {
        return (
            <div className="IndividualDeck" key={"deck_" + i}>
                <label className="radio" htmlFor={d.id}>
                    <input type="radio" defaultChecked = {i === 0} id={d.id} name="deck" value={d.id} onClick={props.handleDeckChange} />
                    <img className="checkmark" src={d.src} />
                </label>
                <div className="cardPocket" id={d.id + "Pocket"}>
                    <h2>{d.name}</h2>
                </div>
            </div>
        )
    })
}

export default DeckChooser;