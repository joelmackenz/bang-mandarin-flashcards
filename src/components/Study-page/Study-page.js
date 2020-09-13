import React from 'react';
import SelectLesson from "../Select-lesson/select-lesson";
import DisplayLesson from '../Display-lesson/display-lesson';
import RandomFlashcard from '../Random-flashcard/random-flashcard';
import "./Study.css";

class Study extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { currentLessonSet: ["每", "次", "干", "吗", "开", "恨", "谢"],
                      currentLessonChar: ["每", "次", "干", "吗", "开", "恨", "谢", "měi", "cì", "gān", "má", "kāi", "hěn", "xiè"],
                    currentPinyin: ["měi", "cì", "gān", "má", "kāi", "hěn", "xiè",]
    };
  
      this.changeLesson = this.changeLesson.bind(this);
    }

    changeLesson(newLesson) {
      newLesson = newLesson.split(',')
      let newLessonLength = (newLesson.length) / 2;
        this.setState({
            currentLessonChar: newLesson,
            currentLessonSet: newLesson.slice(0, newLessonLength)
            });
        }

    render() {
    return (
      <div>
        <h2>Study</h2>
        <div className="Parent">
          <div className="Library">
            <div className="LessonSelect" >
              <SelectLesson
                onChange={this.changeLesson} /> 
            </div>
              <DisplayLesson
                currentLessonDisplay={this.state.currentLessonSet}/> 
          </div>
            <RandomFlashcard 
              currentLesson={this.state.currentLessonChar} />

        </div>
      </div>
    );
  }
}

export default Study;