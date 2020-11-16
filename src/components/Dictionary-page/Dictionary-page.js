import React from "react";
import Dictionary from "../Dictionary/Dictionary";
import "./Dictionary-page.css";

class DictionaryPage extends React.Component {

    characters = [];
    lessonNum = [];
    pinyin = [];
    english = [];

    render() {

    for (const [key, value] of Object.entries(Dictionary)) {
        this.characters.push(key);
        this.lessonNum.push(value[0]);
        this.pinyin.push(value[1]);
        this.english.push(value[2]);
    }

    let entries = []

    for (const [key, value] of Object.entries(Dictionary)) {
            entries.push(
            <div className="chart">
                <p className="entry"> {value[1]} </p> 
                <p className="entry"> {key} </p> 
                <p className="entry"> {value[3]} </p> 
                <p className="entry"> {value[4]}</p>
            </div>
            )}
    
        return(
            <div className="dictionary-page-main">
                <h2>Dictionary</h2>
                <div className="columnTitles">
                    <h1 >Chapter</h1>
                    <h1 >Character</h1>
                    <h1>Pinyin</h1>
                    <h1>English</h1>
                </div>
                {entries}
            </div>
        )
    }
}

export default DictionaryPage