import React from "react";
import { Link } from "react-router-dom";
import "./Top3Coins.css";

const Top3Coins = ({ coins }) => {
  const compare = (a, b) => {
    if (a.price_change_percentage_24h > b.price_change_percentage_24h) {
      return -1;
    } else if (a.price_change_percentage_24h < b.price_change_percentage_24h) {
      return 1;
    } else {
      return 0;
    }
  };

  const sorted = [...coins].sort(compare).slice(0, 3);

  return (
    <section className="top__coins">
      <h1>TOP PERFORMANCE TODAY</h1>
      <div className="cardsContainer">
        {sorted.map((coin, index) => (
          <div className={`top__coin top__coin--${index + 1}`} key={coin.id}>
            <div className="coin__header">
              <span className="coin__name">{coin.name}</span>
              <span className="coin__symbol">
                ({coin.symbol.toUpperCase()})
              </span>
            </div>
            <Link to={`/coins/${coin.id}`}>
              <img src={coin.image} alt="top 3 img" />
            </Link>
            <div className="coin__body">
              <span className="current__price">
                ${coin.current_price.toLocaleString()}
              </span>
              <span className="change24h positive">
                <span
                  className="iconify"
                  data-icon="ant-design:caret-up-filled"
                ></span>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Top3Coins;
