import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <>
          <div>
            <div>
              <span>Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            
            <div className="column">
              <span>
                Total Supply
              </span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          <div>
            <div className="column">
              <span>Volume(24H)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className="column">
              <span>high 24h</span>
              <span>{data.high_24h}</span>
            </div>
          </div>

          <div>
            <div className="column">
              <span>
                Circulating Supply
              </span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div className="column">
              <span>low 24h</span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
