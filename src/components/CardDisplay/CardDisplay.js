import React from 'react'
import './CardDisplay.css'

class CardDisplay extends React.Component {
    componentDidMount() {
        document.getElementById('MagicButton').scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
        <div className={"cardName card_" + this.props.num}>
            <div className="actualCardName">
                <h1 style={{"--animationOrder": this.props.num}}>{this.props.card.name}</h1>
            </div>
            <div class="displayCurtain">    
                <div className="bottom-panel" style={{"--animationOrder": this.props.num}}>
                </div>
                <div className="left-panel" style={{"--animationOrder": this.props.num}}>
                </div>
                <div className="right-panel" style={{"--animationOrder": this.props.num}}>
                </div>
        
                <div className="content">
                    <img src={this.props.card.img} />
                    <div className="descriptorBox">
                        {this.props.card.descriptors.map((description, i) => {
                        return <p key={"desc_" + i}>{description}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CardDisplay;