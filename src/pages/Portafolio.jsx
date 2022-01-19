import React from "react";
import AddCoin from "../components/AddCoin/AddCoin";
import CoinList from "../components/CoinList/CoinList";
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
