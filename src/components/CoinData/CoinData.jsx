import React from "react";
import './CoinData.css'

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="coin-data">
          {/* <hr> opcionales*/}
          <section>
            <div className="data">
              <h4 className="text">Market Cap</h4>
              <span>{data.market_cap}</span>
            </div>
            <div className="data">
              <h4 className="text">Total Supply</h4>
              <span>{data.total_supply}</span>
            </div>
          </section>
          <hr/>
          <section>
            <div className="data">
              <h4 className="text">Volume(24H)</h4>
              <span>{data.total_volume}</span>
            </div>
            <div className="data">
              <h4 className="text">high 24h</h4>
              <span>{data.high_24h}</span>
            </div>
          </section>
          <hr/>
          <section>
            <div className="data">
              <h4 className="text">Circulating Supply</h4>
              <span>{data.circulating_supply}</span>
            </div>
            <div className="data">
              <h4 className="text">Low 24h</h4>
              <span>{data.low_24h}</span>
            </div>
          </section>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
