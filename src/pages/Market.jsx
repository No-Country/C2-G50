import React, { useEffect, useState } from "react";
import TableCoins from "../services/TableCoins";
import coinGecko from "../apis/coinGecko";
import Menu from "../components/menu/Menu";

const Market = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await coinGecko.get(
        "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Menu/>
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          className="search"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableCoins coins={coins} search={search} />
      </div>
    </>
  );
}

export default Market;
