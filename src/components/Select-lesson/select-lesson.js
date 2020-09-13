import React from "react";
import dictionary from "../Dictionary/Dictionary";

export class selectLesson extends React.Component {
    constructor(props) {
        super(props);
        this.changeLesson = this.changeLesson.bind(this)
    }
    
    lessonFour = {
        name: "Lesson Four",
        chars: ["PH1", "PH2", "PH3", "PH4", "PH5", "PH6", "PH7"],
        pinyin: ["PHA1", "PHA2", "PHA3", "PHA4", "PHA5", "PHA6", "PHA7"]
    }

    changeLesson(e) {
        const name = e.target.value;
        this.props.onChange(name);
      }

      render() {

      const lessonOneChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(1)) {
          lessonOneChars.push(key)
        }
      }

      const lessonOnePinyin = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(1)) {
          lessonOnePinyin.push(value[1])
        }
      }
      const lessonTwoChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(2)) {
          lessonTwoChars.push(key)
        }
      }

      const lessonTwoPinyin = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(2)) {
          lessonTwoPinyin.push(value[1])
        }
      }
      const lessonThreeChars = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3)) {
          lessonThreeChars.push(key)
        }
      }

      const lessonThreePinyin = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (value.includes(3)) {
          lessonThreePinyin.push(value[1])
        }
      }


        return (
          <div className="dropDown">
            <select
              id="lessons"
              onChange={this.changeLesson}>
              <option value={[lessonOneChars, lessonOnePinyin]}>Lesson One</option>
              <option value={[lessonTwoChars, lessonTwoPinyin]}>Lesson Two</option>
              <option value={[lessonThreeChars, lessonThreePinyin]}>Lesson Three</option>
              <option value={[this.lessonFour.chars, this.lessonFour.pinyin]}>Lesson Four</option>
            </select>
          </div>
        );
      }
    }

export default selectLesson;