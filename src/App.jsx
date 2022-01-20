import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CoinInformation from "./pages/CoinInformation";
import Market from "./pages/Market";
import Portafolio from "./pages/Portafolio";
import News from "./pages/News";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <WatchListContextProvider>
    <Router>
      <Switch>
        <Route path="/"  exact component={Dashboard} />
        <Route exact path="/portafolio" component={Portafolio}/>
        <Route path="/news" component={News}/>
        <Route path="/settings" />
        <Route path="/coins/:id" component={CoinInformation}/>
      </Switch>
    </Router>
    </WatchListContextProvider>
  );
}

const Dashboard = () => {
  return (
    <Market/>
  );
}

export default App;