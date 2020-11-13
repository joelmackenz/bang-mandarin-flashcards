import React from 'react';
import "./display-lesson.css"

export class displayLesson extends React.Component {

  currentLessonChars() {
    let currentLessonChars = []
    for (const entry of this.props.currentLessonSet) {
      if (entry.length === 1) {
        currentLessonChars.push(entry)
      }
      }
    return currentLessonChars
  }

  render() {
    

    return (
      <div >
        <p className="LessonDisplay">
          {this.currentLessonChars()}
        </p>
      </div>
    );
  }
}

export default displayLesson;