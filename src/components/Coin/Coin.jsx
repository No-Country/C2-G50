import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

const Coin = ({ coin, deleteCoin }) => {
  return (
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
        <img className="coinlist-image" src={coin.image} alt="" />
        </Link>
        <span className="text-decoration-none">${coin.current_price}</span>

        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <i className="iconify align-middle mr-1" data-icon="mdi:arrow-up-thick" data-flip="vertical"></i>
          ) : (
            <i className="iconify align-middle mr-1" data-icon="mdi:arrow-up-thick"></i>
          )}
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
        <span onClick={(e) => {
              e.preventDefault();
              deleteCoin(coin.id);

            }}>
          <i className="iconify delete-icon" data-icon="mdi:close-box"></i>
          </span>

      </li>
  );
};

export default Coin;
