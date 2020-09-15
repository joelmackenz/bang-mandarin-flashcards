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

    // This function does not work, but appears the exact same as what is repeated in "return"...
    let createList = (array) => {
        array.map((i, x) => {
            return <li>{i}</li>
        })}

    let entries = []

    for (const [key, value] of Object.entries(Dictionary)) {
            entries.push(
            <div className="chart">
                <p className="entry"> {value[0]} </p> 
                <p className="entry"> {key} </p> 
                <p className="entry"> {value[1]} </p> 
                <p className="entry"> {value[2]}</p>
            </div>
            )}
    

        return(
            <div>
                <h2>Dictionary</h2>
                <div className="columnTitles">
                    <h1 class-name="title">Chapter</h1>
                    <h1 class-name="title">Character</h1>
                    <h1 class-name="title">Pinyin</h1>
                    <h1 class-name="title">English</h1>
                </div>
                {entries}
            </div>
        )
    }
}

export default DictionaryPage