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
    <>
      <header className= "top3">
        <section className="top__title"> 
          <h2><span class="iconify"  data-icon="ic:baseline-trending-up"></span> Best rising cryptocurrency</h2>
        </section>
        <section className="top__coins">
          {sorted.map((coin, index) => (
            <div className={`top__coin top__coin--${index + 1}`} key={coin.id}>
              <header className="coin__header">
                <h3 className="coin__name">{coin.name}</h3>
                <span className="coin__symbol">({coin.symbol.toUpperCase()})</span>
              </header>
              <Link to={`/coins/${coin.id}`}>
              <img src={coin.image} />
              </Link>
              <main className="coin__body">
                <span className="current__price">
                  ${coin.current_price.toLocaleString()}
                </span>
                <span className="change24h positive">
                  <span
                    class="iconify"
                    data-icon="ant-design:caret-up-filled"
                  ></span>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </main>
            </div>
          ))}
        </section>
      </header>
    </>
  );
};

export default Top3Coins;
