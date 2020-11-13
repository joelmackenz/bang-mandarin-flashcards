import React from 'react';
import SelectLesson from "../Select-lesson/select-lesson";
import DisplayLesson from '../Display-lesson/display-lesson';
import RandomFlashcard from '../Random-flashcard/random-flashcard';
import "./Study.css";

class Study extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { 
        //Current lesson set will include single- and multi-character entries
        currentLessonSet: ["每", "次", "干", "吗", "开", "恨", "谢"],
        phrasesShow: false,
    };
  
      this.changeLesson = this.changeLesson.bind(this);
      this.togglePhrases = this.togglePhrases.bind(this);
    }

    changeLesson(newLesson) {
      newLesson = newLesson.split(',')
        this.setState({
            currentLessonSet: newLesson
            });
        }

    togglePhrases(t) {
      this.setState({
        phrasesShow: t
      })
    }

    render() {
    return (
      <div>
        <h2>Study</h2>
        <div className="entire-display">
          <div className="library">
              <SelectLesson
                onChange={this.changeLesson} /> 
              <DisplayLesson
                currentLessonSet={this.state.currentLessonSet}/> 
          </div>
            <RandomFlashcard
              togglePhrases={this.togglePhrases}
              currentLessonSet={this.state.currentLessonSet} />
        </div>
      </div>
    );
  }
}

export default Study;