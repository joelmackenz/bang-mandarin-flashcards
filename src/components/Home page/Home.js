import React from "react";
import "./Home.css";

class Home extends React.Component {
    render() {
        return (
            <div className="home-main">
                <h2 className="home-logo">照!</h2>
                <h2>Mandarin Flashcards</h2>
                <div className="home-paragraph">
                    <h3>Press one of the links above to begin studying!</h3>
                    <p>
                        <br />
                        照! Mandarin Flashcards is a project by Joel MacKenzie,
                        created for studying Mandarin characters.
                        <br />
                        The project uses the create-react-app framework.
                        <br />
                        <br />
                        See the source for this project{" "}
                        <a href="https://github.com/joelmackenz/flash-mandarin-flashcards">
                            here
                        </a>
                        ,<br />
                        see Joel's newer projects on{" "}
                        <a href="https://github.com/joelmackenz"> GitHub</a>,
                        <br />
                        connect with Joel on{" "}
                        <a href="https://linkedin.com/in/joelmackenz">
                            LinkedIn
                        </a>
                        ,
                        <br />
                        and see even more at{" "}
                        <a href="https://joelmackenzie.ca">joelmackenzie.ca</a>.
                        <br />
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
