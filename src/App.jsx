import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CoinInformation from "./pages/CoinInformation";
import Market from "./pages/Market";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/"  exact component={Market} />
        <Route path="/portafolio" />
        <Route path="/news" />
        <Route path="/settings" />
        <Route path="/coins/:id" component={CoinInformation}/>
      </Switch>
    </Router>
  );
};

export default App;
