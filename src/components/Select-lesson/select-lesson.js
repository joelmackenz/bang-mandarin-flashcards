import React from "react";
import dictionary from "../Dictionary/Dictionary";

export class selectLesson extends React.Component {
    constructor(props) {
        super(props);
        this.changeLesson = this.changeLesson.bind(this);
    }

    changeLesson(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    render() {
        let lessonCharList = [];
        let lessonCharEntry = [];
        let chapter = 3;
        let lesson = 1;

        //This for loop dynamically renders all of the information in Dictionary.js, organized by value[0] of each item.
        //lessonCharEntries are added to the lessonCharList, which is the list of all of the lessons.
        for (const [key, value] of Object.entries(dictionary)) {
            if (value[1] === chapter && value[2] === lesson) {
                lessonCharEntry.push(key);
            } else {
                //if the lesson array is empty, don't add any character to it. Else, add the entry to the list.
                if (lessonCharEntry.length === 0) {
                } else {
                    lessonCharList.push(lessonCharEntry);
                }
                lessonCharEntry = [];
                lesson++;
                while (lesson !== value[2]) {
                    chapter++;
                    lesson = 1;
                }
                lessonCharEntry.push(key);
            }
        }
        lessonCharList.push(lessonCharEntry);

        //This creates an object which dynamically creates entries in an object to hold the lessons. They are titled according to
        //their first element's lesson number.
        let lessons = {};
        for (const lesson of lessonCharList) {
            let lessonValue = dictionary[lesson[0]][2];
            let chapterValue = dictionary[lesson[0]][1];
            let lessonNum =
                "Lesson " +
                JSON.stringify(chapterValue) +
                "." +
                JSON.stringify(lessonValue);
            lessons[lessonNum] = lesson;
        }

        return (
            <div className="dropDown">
                <select id="lessonSelect" onChange={this.changeLesson}>
                    {Object.entries(lessons).map((entry) => (
                        <option value={entry[1]}>{entry[0]}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default selectLesson;
