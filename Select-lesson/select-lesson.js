import React from "react";
import dictionary from "../Dictionary/Dictionary";

export class selectLesson extends React.Component {
    constructor(props) {
        super(props);
        this.changeLesson = this.changeLesson.bind(this)
    }


    changeLesson(e) {
        const name = e.target.value;
        this.props.onChange(name);
      }

      render() {
      let lessonCharList = [];
      let lessonCharEntry = [];
      let lesson = 3.1;

      //Formula found on GitHub for rounding numbers to decimal places
      let precisionRound = (number, precision) => {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      }

      //This for loop dynamically renders all of the information in Dictionary.js, organized by value[0] of each item.
      //lessonCharEntries are added to the lessonCharList, which is the list of all of the lessons.
      for (const [key, value] of Object.entries(dictionary)){
        if (value[0] === lesson) {
          lessonCharEntry.push(key);
        } else {
          //if the lesson array is empty, don't add any character to it.
          if (lessonCharEntry.length === 0) {
          } else {
            //if it is not empty, add the character to complete the array.
            lessonCharList.push(lessonCharEntry);
          }
          lessonCharEntry = [];
          //lesson increase by .1
          lesson = precisionRound((lesson + .1), 3);
          while (lesson !== value[0]) {
            //while the current lesson number does not equal the next character's number, keep adding .1 until they are the same.
            lesson = precisionRound((lesson + .1), 3)
          }
          lessonCharEntry.push(key)
        }
      }
      //This will move the last lessonCharEntry array to the CharList
      lessonCharList.push(lessonCharEntry)


      //This creates an object which dynamically creates entries in an object to hold the lessons. They are titled according to
      //their first element's lesson number.
      let lessons = {}
      for (const lesson of lessonCharList) {
        let lessonValue = dictionary[lesson[0]][0]
        let lessonNum = 'Lesson ' + JSON.stringify(lessonValue);
        lessons[lessonNum] = lesson;
      }
     

        return (
          <div className="dropDown">
            <select
              id="lessonSelect"
              onChange={this.changeLesson}>
              {Object.entries(lessons).map((entry) =>
                <option value={entry[1]}>{entry[0]}</option>
                )
              }
            </select>
          </div>
        );
      }
    }

export default selectLesson;