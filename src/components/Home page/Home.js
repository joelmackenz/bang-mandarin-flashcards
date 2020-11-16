import React from 'react';
import "./Home.css";

class Home extends React.Component {
    render() {
    return (
      <div className="home-main">
        <h2 className="home-logo">照!</h2>
        <h2>Mandarin Flashcards</h2>
        <div className="home-paragraph">
            <br/>
            <p>Press one of the links above to begin studying!</p>
            <p>照! Mandarin Flashcards is an in-progress project by Joel MacKenzie, created using the React framework.<br/>
            <br/>See the GitHub page for this project <a href="https://github.com/joelmackenz/Mandarin-Flashcard-Web-App">here</a>,<br/>
            see another project by Joel, Workout Tracker, <a href="https://joelmackenz.github.io/WorkoutTracker">here</a>,<br/>
            and see more at <a href="https://joelmackenzie.ca">joelmackenzie.ca</a>.
            <br/>
            </p>
        </div>
        
      </div>
    );
  }
}

export default Home;