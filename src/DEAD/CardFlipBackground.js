import React, { useState } from 'react';
import './CardFlipBackground.css';

function CardFlipBackground(props) {
    function iteration(num) {
        const items =[];
        for (var i = 0; i < num; i++) {
            items.push(<div className="tileCard"
                            key={"card_" + i}>
                            <div className="tileCard-inner">
                                <div className="front">
                                </div>
                                <span className="back">
                                </span>
                            </div>
                       </div>)
        }
        return (
            <div className="tiles">
                {items}
            </div>
        )
    }

    return (
        <div className="BackgroundArea" id="backgroundArea">
            {iteration(250)}
        </div>
    )


}

export default CardFlipBackground;