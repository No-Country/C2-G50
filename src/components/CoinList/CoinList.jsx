import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../../api/coinGecko.js";
import { WatchListContext } from "../../context/watchListContext";
import Coin from "../Coin/Coin";
import NoCoin from "../NoCoin/NoCoin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(watchList);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };
   
    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ul className="coinlist">
        {(coins.length < 100 && coins.length > 0) ? (coins.map((coin) => 
          <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />))
  : <NoCoin/>}
      </ul>
    );
  };

  return renderCoins();
};

export default CoinList;
