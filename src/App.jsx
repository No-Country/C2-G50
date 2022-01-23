import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CoinInformation from "./pages/CoinInformation/CoinInformation";
import Market from "./pages/Market/Market";
import Portafolio from "./pages/Portafolio/Portafolio";
import News from "./pages/News/News";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";
import useLocalStorage from 'use-local-storage'

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div className='app' data-theme={theme}>
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
    </div>
  );
}

const Dashboard = () => {
  return (
    <Market/>
  );
}

export default App;