import React, { useState, useEffect } from "react";
import CoinRow from "../CoinRow/CoinRow";
import "./TableCoins.css";

const TableCoins = ({ coins, search }) => {
  const [windowDimentions, setWindowDimentions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimentions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>;

  return (
    <div className="table__container">
      <table className="table__scrollable">
        <thead>
          <tr>
            <th className="sticky-col-header sticky-first-col">#</th>
            <th className="sticky-col-header sticky-second-col">Coin</th>
            <th>Price (USD)</th>
            <th>Price Change</th>
            <th>24h Volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin, index) => (
            <CoinRow
              coin={coin}
              key={coin.name}
              index={index}
              windowWidth={windowDimentions.width}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoins;
