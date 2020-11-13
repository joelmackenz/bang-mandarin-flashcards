import React from 'react';
import Study from "./components/Study-page/Study-page";
import DictionaryPage from "./components/Dictionary-page/Dictionary-page";
import API from "./components/API-page/Mandarin-API";
import Nav from "./components/Nav/Nav";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";


class App extends React.Component {
    render() {
    return (
      <Router basename={process.env.PUBLIC_URL}> 
        <Nav/>
        <Switch>
          <Route path="/" exact component={Study} />
          <Route path="/study" component={Study} />
          <Route path="/dictionary" component={DictionaryPage}/>
          <Route path="/charactersearch" component={API}/>
        </Switch>
      </Router>
    );
  }
}

export default App;