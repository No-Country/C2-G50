import React from "react";
import './CoinData.css'

const CoinDescription = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="coin-data">
          <div className="data">
              <h4 className="text">Description</h4>
              <html>{data.en}</html>
            </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinDescription;