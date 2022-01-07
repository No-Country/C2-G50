import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/coinDetailPage";
import MarketPage from "./pages/marketPage";

import "./App.css";


const App = () => {
  return (
    <div className="container">
    <BrowserRouter>
          <Route exact path="/" component={MarketPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
    </BrowserRouter>
    </div>
  );
};

export default App;
