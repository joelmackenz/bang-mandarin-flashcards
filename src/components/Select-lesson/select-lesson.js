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

      const chooseLesson = ["Choose a lesson!",""]

      const bookThreeChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (Math.floor(value[0]) === 3) {
          bookThreeChars.push(key)
        }
      }

      const bookThreePinyin = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (Math.floor(value[0]) === 3) {
          bookThreePinyin.push(value[1])
        }
      }

      const lessonOneChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3.1)) {
          lessonOneChars.push(key)
        }
      }

      const lessonOnePinyin = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3.1)) {
          lessonOnePinyin.push(value[1])
        }
      }
      const lessonTwoChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3.2)) {
          lessonTwoChars.push(key)
        }
      }

      const lessonTwoPinyin = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3.2)) {
          lessonTwoPinyin.push(value[1])
        }
      }
      const lessonThreeChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3.3)) {
          lessonThreeChars.push(key)
        }
      }

      const lessonThreePinyin = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3.3)) {
          lessonThreePinyin.push(value[1])
        }
      }
      const bookFourChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (Math.floor(value[0]) === 4) {
          bookFourChars.push(key)
        }
      }
      const bookFourPinyin = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (Math.floor(value[0]) === 4) {
          bookFourPinyin.push(value[1])
        }
      }

      const b4L1Chars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(4.1)) {
          b4L1Chars.push(key)
        }
      }

      const b4L1Pinyin = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(4.1)) {
          b4L1Pinyin.push(value[1])
        }
      }

        return (
          <div className="dropDown">
            <select
              id="lessons"
              onChange={this.changeLesson}>
              <option value={[chooseLesson]}>Choose a lesson!</option>
              <option value={[bookThreeChars, bookThreePinyin]}>Book 3</option>
              <option value={[lessonOneChars, lessonOnePinyin]}>Book 3, Lesson 1</option>
              <option value={[lessonTwoChars, lessonTwoPinyin]}>Book 3, Lesson 2</option>
              <option value={[lessonThreeChars, lessonThreePinyin]}>Book 3, Lesson 3</option>
              <option value={[bookFourChars, bookFourPinyin]}>Book 4</option>
              <option value={[b4L1Chars,b4L1Pinyin]}>Book 4, Lesson 1</option>
            </select>
          </div>
        );
      }
    }

export default selectLesson;