import React from "react";
import { Link } from "react-router-dom";
import "./CoinRow.css";

const CoinRow = ({ coin, index }) => {
  return (
    <section className="coin__row">
      <div className="coin__row--index">{index}</div>
      <div className="coin__row--coin">
        <img src={coin.image} alt="criptocurrency icon" className="coin__img" />
        <span className="coin__name">{coin.name}</span>
        <span className="coin__symbol">({coin.symbol.toUpperCase()})</span>
      </div>
      <div className="coin__row--price">
        ${coin.current_price.toLocaleString()}
      </div>
      <div
        className={
          coin.price_change_percentage_24h > 0 ? "positive" : "negative"
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </div>
      <div className="coin__row--volume">
        ${coin.total_volume.toLocaleString()}
      </div>
      <div className="coin__row--chartLink">
        <Link to={`/coins/${coin.id}`}>
          <span className="iconify chartIcon" data-icon="mdi:chart-line"></span>
        </Link>
      </div>
    </section>
  );
};

export default CoinRow;
