import React from "react";
import AddCoin from "../../components/AddCoin/AddCoin";
import CoinList from "../../components/CoinList/CoinList";
import Excel from "../../components/Excel";
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
          <Excel />
        </div>
      </div>                            
    </>
  );
};

export default Portafolio;
