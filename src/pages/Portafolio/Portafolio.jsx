import React from "react";
import AddCoin from "../../components/AddCoin/AddCoin";
import CoinList from "../../components/CoinList/CoinList";
import Email from "../../components/EmaiForm";
import Menu from "../../components/menu/Menu";
import "./Portafolio.css";

const Portafolio = () => {
  return (
    <>
      <div className="container">
        <Menu />
        <div className="dashboard__container coinsummary">
          <AddCoin />
          <CoinList />
          <Email />
        </div>
      </div>                            
    </>
  );
};

export default Portafolio;