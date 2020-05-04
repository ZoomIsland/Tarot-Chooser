import React, { useState } from 'react';
import './SearchForm.css';
import CardChooser from '../CardChooserFunctions/CardChooser';
import DeckChooser from './DeckChooser';
import CardAmount from './CardAmount';
import CardDisplay from '../CardDisplay/CardDisplay';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {deck: 'wild', amount: '1', chosenCards: []}
        this.handleDeckChange = this.handleDeckChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleDeckChange(event) {
        this.setState({ deck: event.target.value });
    }

    handleAmountChange(number) {
        this.setState({ amount: number });
    }

    onSubmit(event) {
        if (this.state.deck && this.state.amount) {
            this.setState({chosenCards: []});
            let chosenCards = CardChooser.pullCards(this.state.amount, this.state.deck);
            setTimeout(() => {this.setState({ chosenCards: chosenCards })}, 1);
        } else {
            alert("Choose a deck!")
        }
    }
    
    render() {
        return (
                <div className="fullForm" key="headerForm">
                    <div className="deckChoice">
                        <DeckChooser handleDeckChange={this.handleDeckChange} />
                    </div>
                    <div className="CardChoice">
                        <CardAmount handleAmountChange={this.handleAmountChange} />
                    </div>
                    <div className="MagicButton">
                            <button onClick={this.onSubmit}>
                                    <h2>Show my spread</h2>
                            </button>
                    </div>
                    
                    <div id="cardDisplay" className="cardDisplay">
                        {
                            this.state.chosenCards.map((card, i) => {
                                return (
                                    <CardDisplay num={i} key={"cd" + i} card={card} />
                                )
                            })
                        }
                    </div>
                </div>
        );
    }
}

export default SearchForm;