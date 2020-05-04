import React from 'react';
import './CardFlip.css'

function CardFlipper() {
    return (
        <div id="flipcard" className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p>FRONT</p>
                </div>
                <div className="flip-card-back">
                    <p>BACK</p>
                </div>
            </div>
        </div>
    )
}

export default CardFlipper;