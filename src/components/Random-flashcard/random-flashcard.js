import React from "react";
import "./random-flashcard.css";
import Checkbox from "../Checkbox/Checkbox";
import dictionary from "../Dictionary/Dictionary";

class RandomFlashcard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mandCard: "",
            pinyinCard: "",
            englishCard: "",
            englishCardShow: false,
        }
        this.chooseRandCard = this.chooseRandCard.bind(this)
        this.revealCard = this.revealCard.bind(this)
        this.showEnglish = this.showEnglish.bind(this)
    }

    currentCard = 0
    buttonToggle = true
    randOrRevealDisplay = "Random Card"

    /*This changes the button to either choose a random card or reveal the pinyin */


    chooseRandCard() {
        let randMandCardArray = this.props.currentLesson
        let rand = Math.floor(Math.random() * (randMandCardArray.length / 2))        
        let randMandCard = randMandCardArray[rand];
        this.currentCard = rand;
        this.setState({
            mandCard: randMandCard,
            pinyinCard: "",
            englishCard: "",}
            );
        this.randOrRevealDisplay = "Show Pinyin"
    }

    revealCard() {
        let matchingPinyinCard = this.props.currentLesson[this.currentCard + (this.props.currentLesson.length / 2)];
        this.setState({
            pinyinCard: matchingPinyinCard,
            englishCard: dictionary[this.state.mandCard].slice(2)
        })
        this.randOrRevealDisplay = "Random Card"
    }

    showEnglish() {
        this.setState({
            englishCardShow: !this.state.englishCardShow
        })
    }


    render() {
        let englishCardDisplay;
        if (this.state.englishCardShow) {
            englishCardDisplay = <p className="english-card">{this.state.englishCard}</p>
        } else { 
        englishCardDisplay = <p className="english-card"></p>
        }

    return (
        <div className="outer-box">
        <div>
            <div className="button-box">
                <button className="rand-button"
                    onClick={() => {
                            if (this.buttonToggle) {
                                this.buttonToggle = !this.buttonToggle
                                this.chooseRandCard()
                            } else {
                                this.buttonToggle = !this.buttonToggle
                                this.revealCard()
                        }}}>
                    {this.randOrRevealDisplay}
                </button>
                <Checkbox className="checkbox" title="English" onChange={this.showEnglish} />
            </div>
            </div>
            <div className="character-box">
                <div>
                    <p className="mand-card">{this.state.mandCard}</p>
                </div>
                <div className="pinyin-english-box">
                    <p className="pinyin-card">{this.state.pinyinCard}</p>
                    {englishCardDisplay}
                </div>

            </div>

        </div>
    )
    }    
}

export default RandomFlashcard