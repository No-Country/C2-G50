import React from "react";
import AddCoin from "../../components/AddCoin/AddCoin";
import CoinList from "../../components/CoinList/CoinList";
import Email from "../../components/EmailForm";
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
          <Email />
          <Excel />
        </div>
      </div>                            
    </>
  );
};

export default Portafolio;
