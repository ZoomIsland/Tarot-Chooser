import React, { useState } from 'react';
import './CardAmount.css';

function CardAmount(props) {
    const cardAmounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [cardAmount, setCardAmount] = useState(1);

    function cardClick(e) {
        const amount = Number.parseInt(e.target.id) + 1;
        setCardAmount(amount);
        props.handleAmountChange(amount);
    }

    function cardvCards(num) {
        if (num === 0) {
            return (
                <p>card</p>
            )
        } else {
            return (
                <p>cards</p>
            )
        }
    }

    function getCards() {
        return cardAmounts.map((d, i) => {
            if (i < cardAmount) {
                return (
                    <div className="FrontFacing">
                        <div className="cardFront" key={"cardfront_" + i} id={i} onMouseEnter={cardClick}>
                            <div className="borderbox">
                                <h1>{d}</h1>
                                {cardvCards(i)}
                            </div>
                        </div>
                        <div className="cardBack" key={"cardback_" + i} id={i} onMouseEnter={cardClick}>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="BackFacing">
                        <div className="cardFront" key={"cardfront_" + i} id={i} onMouseEnter={cardClick}>
                            <div className="borderbox">
                                <h1>{d}</h1>
                                {cardvCards(i)}
                            </div>
                        </div>
                        <div className="cardBack" key={"cardback_" + i} id={i} onMouseEnter={cardClick}>
                        </div>
                    </div>
                    )
            }
        })
    }

    return (
        <div className="cardAmountDisplay">
            {getCards()}
        </div>
    )
}

export default CardAmount;