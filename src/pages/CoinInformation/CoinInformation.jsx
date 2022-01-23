import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "../../components/Chart/HistoryChart";
import CoinData from "../../components/CoinData/CoinData";
import CoinDescription from "../../components/CoinData/CoinDescription";
import CoinTicker from "../../components/CoinData/CoinTicker";
import coinGecko from "../../api/coinGecko";
import Menu from "../../components/menu/Menu";
import "./CoinInformation.css";

const CoinInformation = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail, description, tickers] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
        coinGecko.get(`/coins/${id}/`),
        coinGecko.get(`/coins/${id}/`),
      ]);
      console.log(day);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
        description: description.data.description,
        tickers: tickers.data.tickers
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <div className="container"> 
        <Menu/>
        <div className="dashboard__container coinlist">
          <HistoryChart data={coinData} />
          <CoinData data={coinData.detail} />
          <CoinTicker data={coinData.tickers} />
          <CoinDescription data={coinData.description} />
        </div>
      </div>
    );
  };

  return renderData();
};

export default CoinInformation;
