import React from "react";
import { Link } from "react-router-dom";
import "./CoinRow.css";

const CoinRow = ({ coin, index, windowWidth }) => {
  return (
    <tr>
      <td className="coin__row--index sticky-col sticky-first-col">
        #{index + 1}
      </td>
      <td className="coin__row--coin sticky-col sticky-second-col">
        <Link to={`/coins/${coin.id}`}>
          <img
            src={coin.image}
            alt="criptocurrency icon"
            className="coin__img"
          />
          {windowWidth >= 768
            ? `${coin.name}  (${coin.symbol.toUpperCase()})`
            : coin.symbol.toUpperCase()}
        </Link>
      </td>
      <td className="coin__row--price">
        ${coin.current_price}
      </td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "positive" : "negative"
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td className="coin__row--volume">
        ${coin.total_volume.toLocaleString()}
      </td>
      <td>
        <Link to={`/coins/${coin.id}`}>
          <span className="iconify" data-icon="bx:bxs-detail"></span>Detail
        </Link>
      </td>
    </tr>
  );
};

export default CoinRow;
