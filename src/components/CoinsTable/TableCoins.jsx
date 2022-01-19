import React from "react";
import CoinRow from "../CoinRow/CoinRow";
import "./TableCoins.css";

const titles = [
  "#",
  "Coin",
  "Price (USD)",
  "Price Change",
  "24h Volume",
  "Chart",
];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>;

  return (
    <div className="table__coins">
      <section className="table__coins--titles">
        {titles.map((title, i) => (
          <div className="table__coins--title" key={i}>
            {title}
          </div>
        ))}
      </section>
      <hr />
      <section className="table__coins--coins">
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </section>
    </div>
  );
};

export default TableCoins;
