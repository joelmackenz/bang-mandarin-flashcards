import React from "react";
import "./random-flashcard.css";
import Checkbox from "../Checkbox/Checkbox";
import dictionary from "../Dictionary/Dictionary";
import ScaleText from "react-scale-text";

class RandomFlashcard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeEntries: [],
            mandCard: "",
            pinyinCard: "",
            englishCard: "",
            singleCharsShow: true,
            englishCardShow: false,
            phrasesShow: false
        }
        this.chooseRandCard = this.chooseRandCard.bind(this)
        this.revealCard = this.revealCard.bind(this)
        this.showEnglish = this.showEnglish.bind(this)
        this.showSingleChars = this.showSingleChars.bind(this)
        this.togglePhrases = this.togglePhrases.bind(this)
    }

    currentCardNum = 0
    buttonToggle = true
    randOrRevealDisplay = "Random Card"

    setActiveEntries() {
        let activeEntriesTemp = []
        for (const entry of this.props.currentLessonSet) {
                    if (this.state.phrasesShow === true) {
                        activeEntriesTemp.push(entry)
                    } else {
                        //If togglePhrases is false, then only single-char entries are allowed
                        if (entry.length === 1) {
                        activeEntriesTemp.push(entry)
                        }
                    } 
                }
            this.setState({
                activeEntries: activeEntriesTemp
            })
        return activeEntriesTemp
    }

    chooseRandCard() {
        let activeEntries = this.setActiveEntries();
        let rand = Math.floor(Math.random() * (activeEntries.length))       
        let randMandCard = activeEntries[rand];
        this.currentCardNum = rand;
        this.setState({
            mandCard: randMandCard,
            pinyinCard: "",
            englishCard: "",}
            );
        this.randOrRevealDisplay = "Show Pinyin"
    }

    revealCard() {
        //Below checks the dictionary for the current card, and pulls out its first element: the pinyin.
        let matchingPinyinCard = dictionary[this.state.activeEntries[this.currentCardNum]][3];
        this.setState({
            pinyinCard: matchingPinyinCard,
            englishCard: dictionary[this.state.mandCard].slice(4)
        })
        this.randOrRevealDisplay = "Random Card"
    }

    showSingleChars() {
        this.setState({
            singleCharsShow: !this.state.singleCharsShow
        })
    }

    showEnglish() {
        this.setState({
            englishCardShow: !this.state.englishCardShow
        })
    }

    togglePhrases() {
        this.setState({
            phrasesShow: !this.state.phrasesShow
        })
        this.props.togglePhrases(!this.state.phrasesShow)
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
            <div className="button-box">
                <button className="rand-button"
                    onClick={() => {
                            if (this.buttonToggle) { 
                                this.buttonToggle = !this.buttonToggle
                                this.chooseRandCard()
                            } else {
                                this.buttonToggle = !this.buttonToggle
                                this.revealCard()                            
                                    }
                                }
                            }>
                    {this.randOrRevealDisplay}
                </button>
                <Checkbox className="checkbox" title="Single Characters" onChange={this.showSingleChars} />
                <Checkbox className="checkbox" title="English" onChange={this.showEnglish} />
                <Checkbox className="checkbox" title="Phrases" onChange={this.togglePhrases} />
            </div>
            <div className="character-info-box">
                <p className="mand-card">{this.state.mandCard}</p>
                <p className="pinyin-card">{this.state.pinyinCard}</p>
                {englishCardDisplay}
            </div>
        </div>
    )
    }    
}

export default RandomFlashcard