import React from "react";
import AddCoin from "../components/AddCoin";
import CoinList from "../components/CoinList";
import Menu from "../components/menu/Menu";
import "./Portafolio.css";

const Portafolio = () => {
  return (
    <>
    <Menu />
    <div className="coinsummary">
      <AddCoin />
      <CoinList />
    </div>
    </>
  );
};

export default Portafolio;