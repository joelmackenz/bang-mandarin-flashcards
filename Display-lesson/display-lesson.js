import React from 'react';
import "./display-lesson.css"

export class displayLesson extends React.Component {
  render() {
    return (
      <div >
        <p className="LessonDisplay">{this.props.currentLessonDisplay.slice(0,10)}</p>
      </div>
    );
  }
}

export default displayLesson;