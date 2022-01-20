import React from "react";
import './CoinData.css'

const CoinTicker = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="coin-data">
          <div className="data">
              <h4 className="text-header">Markets - buy {data[1].base}</h4>
              <a href={data[0].trade_url}>{data[0].market.name}</a>
              <a href={data[1].trade_url}>{data[1].market.name}</a>
              <a href={data[2].trade_url}>{data[2].market.name}</a>
              <a href={data[3].trade_url}>{data[3].market.name}</a>
              <a href={data[4].trade_url}>{data[4].market.name}</a>
            </div>
        </div>
        
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinTicker;