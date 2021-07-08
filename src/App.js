import React from "react";
import LoadingOverlay from "react-loading-overlay";
import Home from "./components/Home page/Home";
import Study from "./components/Study-page/Study-page";
import DictionaryPage from "./components/Dictionary-page/Dictionary-page";
import API from "./components/Character search/Character-search";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overlayActive: true,
        };
    }

    overlayTimeout = () => {
        setTimeout(() => {
            this.setState({
                overlayActive: false,
            });
        }, 2000);
    };

    render() {
        this.overlayTimeout();

        return (
            <LoadingOverlay
                active={this.state.overlayActive}
                styles={{
                    overlay: (base) => ({
                        ...base,
                        background: "rgba(104, 190, 237)",
                    }),
                }}
                text="照!"
                spinner
            >
                <Router basename={process.env.PUBLIC_URL}>
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/study" component={Study} />
                        <Route path="/dictionary" component={DictionaryPage} />
                        <Route path="/charactersearch" component={API} />
                    </Switch>
                </Router>
            </LoadingOverlay>
        );
    }
}

export default App;
