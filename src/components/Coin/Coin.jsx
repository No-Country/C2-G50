import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <li className="coinlist-item">
      <Link to={`/coins/${coin.id}`}>
        <img className="coinlist-image" src={coin.image} alt="" />
      </Link>
      <span className="text-decoration-none">${coin.current_price}</span>

      <span className={
        coin.price_change_percentage_24h < 0
          ? "negative"
          : "positive"}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </span>
      <button className="delete__button" onClick={(e) => {e.preventDefault(); deleteCoin(coin.id);}}>
          <span className="iconify" data-icon="ant-design:delete-filled"></span>
      </button>
    </li>
  );
};

export default Coin;
