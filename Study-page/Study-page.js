import React from 'react';
import SelectLesson from "../Select-lesson/select-lesson";
import DisplayLesson from '../Display-lesson/display-lesson';
import RandomFlashcard from '../Random-flashcard/random-flashcard';
import "./Study.css";

class Study extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { currentLessonSet: ["每", "次", "干", "吗", "开", "恨", "谢"]
    };
  
      this.changeLesson = this.changeLesson.bind(this);
    }

    changeLesson(newLesson) {
      newLesson = newLesson.split(',')
      let newLessonLength = (newLesson.length) / 2;
        this.setState({
            currentLessonSet: newLesson
            });
        }

    render() {
    return (
      <div className="page">
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
              currentLesson={this.state.currentLessonSet} />

        </div>
      </div>
    );
  }
}

export default Study;