import React, { useEffect, useState } from "react";
import TableCoins from "../../components/CoinsTable/TableCoins";
import Menu from "../../components/menu/Menu";
import coinGecko from "../../api/coinGecko";
import "./Market.css";
import Top3Coins from "../../components/Top3Coins/Top3Coins";

const Market = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    try {
      const res = await coinGecko.get(
        "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
      );
      setCoins(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <Menu />
        <main className="dashboard__container row">
          <Top3Coins coins={coins} />
          <input
            type="text"
            placeholder="Search a Coin"
            className="search"
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
          />
          <TableCoins coins={coins} search={search} />
        </main>
      </div>
    </>
  );
};

export default Market;
