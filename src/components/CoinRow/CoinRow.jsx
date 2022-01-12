import React from "react";
import { Link } from "react-router-dom";

const CoinRow = ({ coin, index }) => {
  return (
    <tr className="coin-row">
      <td className="index">{index}</td>
      
      <td className="coin">
        <img src={coin.image} alt="criptocurrency icon" className="coin__img" style={{ width: "3%" }}/>
        <span className="coin__name">{coin.name}</span>
        <span className="coin__symbol">({coin.symbol})</span> 
      </td>

      <td className="coin-price"> ${coin.current_price.toLocaleString()} </td>

      <td className={
          coin.price_change_percentage_24h > 0 ? "positive" : "negative"
        }>

        {coin.price_change_percentage_24h}
      </td>

      <td className="coin-volume"> ${coin.total_volume.toLocaleString()} </td>
      
      <td>
        <Link to={`/coins/${coin.id}`}> see chart </Link>
      </td>
    </tr>
  );
};

export default CoinRow;
