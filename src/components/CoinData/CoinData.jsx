import React from "react";
import './CoinData.css'

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <>
          {/* <hr> opcionales*/}
          <section>
            <div className="market-cap">
              <h4>Market Cap</h4>
              <span>{data.market_cap}</span>
            </div>
            <div className="total-supply">
              <h4>Total Supply</h4>
              <span>{data.total_supply}</span>
            </div>
          </section>
          <hr/>
          <section>
            <div className="volume">
              <h4>Volume(24H)</h4>
              <span>{data.total_volume}</span>
            </div>
            <div className="high">
              <h4>high 24h</h4>
              <span>{data.high_24h}</span>
            </div>
          </section>
          <hr/>
          <section>
            <div className="circulating">
              <h4>Circulating Supply</h4>
              <span>{data.circulating_supply}</span>
            </div>
            <div className="low">
              <h4>Low 24h</h4>
              <span>{data.low_24h}</span>
            </div>
          </section>
        </>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
