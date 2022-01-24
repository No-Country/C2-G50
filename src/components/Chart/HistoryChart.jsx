import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "./chartConfigs";
import './HistoryChart.css'

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      console.log("yeah");
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "transparent",
              borderColor: detail.price_change_24h < 0 ? "#bd0e0b" : "#38b000",
              pointRadius: 1
            }
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className={
              detail.price_change_24h < 0 ? "negative" : "positive"
            }>${detail.current_price.toFixed(2)}</p>
          <p className={
              detail.price_change_24h < 0 ? "negative" : "positive"
            }>

            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };

  return (
    <section className="coin-info">
      <h3 className="coin-info__price">{renderPrice()}</h3> 
      
      <section className="coin-info__chart">
        <canvas ref={chartRef} id="myChart" height={360}></canvas>
      </section>

      <div className="coin-info__buttons" >
        <button className="coin-info__button" onClick={() => setTimeFormat("24h")}> 24h </button>
        <button className="coin-info__button" onClick={() => setTimeFormat("7d")}> 7d </button>
        <button className="coin-info__button" onClick={() => setTimeFormat("1y")}> 1y </button>
      </div >
    </section>
  );
};

export default HistoryChart;
