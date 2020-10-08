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
          lesson = precisionRound((lesson + .1), 2);
          while (lesson !== value[0]) {
            //while the current lesson number does not equal the next character's number, keep adding .1 until they are the same.
            lesson = precisionRound((lesson + .1), 2)
          }
          lessonCharEntry.push(key)
        }
      }
      //This will move the last lessonCharEntry array to the CharList
      lessonCharList.push(lessonCharEntry)


      //This creates an object which dynamically creates entries in an object to hold the lessons. They are titled according to
      //their first element's lesson number.
      let lessons = {}
      let x = 0;
      for (const lesson of lessonCharList) {
        let lessonValue = dictionary[lesson[0]][0]
        let lessonNum = 'lesson ' + JSON.stringify(lessonValue);
        lessons[lessonNum] = lesson;
        x++
      }
      console.log(lessons)
      //Next, I need to insert these values into the return().
      //I need something that dynamically creates everything below "choose a lesson"



      const bookThreeChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (Math.floor(value[0]) === 3) {
          bookThreeChars.push(key)
        }
      }

      const lessonOneChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3.1)) {
          lessonOneChars.push(key)
        }
      }

      const lessonTwoChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3.2)) {
          lessonTwoChars.push(key)
        }
      }

      const lessonThreeChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3.3)) {
          lessonThreeChars.push(key)
        }
      }

      const bookFourChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (Math.floor(value[0]) === 4) {
          bookFourChars.push(key)
        }
      }

      const b4L1Chars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(4.1)) {
          b4L1Chars.push(key)
        }
      }

        return (
          <div className="dropDown">
            <select
              id="lessons"
              onChange={this.changeLesson}>
              <option>Choose a lesson!</option>
              <option value={bookThreeChars}>Book 3</option>
              <option value={lessonOneChars}>Book 3, Lesson 1</option>
              <option value={lessonTwoChars}>Book 3, Lesson 2</option>
              <option value={lessonThreeChars}>Book 3, Lesson 3</option>
              <option value={bookFourChars}>Book 4</option>
              <option value={b4L1Chars}>Book 4, Lesson 1</option>
            </select>
          </div>
        );
      }
    }

export default selectLesson;