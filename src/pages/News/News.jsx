import React, { useEffect, useState } from "react";
import axios from "axios";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Menu from "../../components/menu/Menu";
import NewsTable from "../../components/NewsTable/NewsTable";

import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    const options = {
      method: "GET",
      url: "https://cryptocurrency-news-live.p.rapidapi.com/crypto-news",
      headers: {
        "x-rapidapi-host": "cryptocurrency-news-live.p.rapidapi.com",
        "x-rapidapi-key": "18209646admsh8ed70f523b2330ap1e30abjsn977a6caec5c8",
      },
    };

    try {
      const res = await axios.request(options);
      setNews(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="container">
        <Menu />
        <div className="dashboard__container row">
          {loading ? <h1>Loading News</h1> : <NewsTable news={news} />}
          <div className="selfCenter standardWidth">
            <TwitterTimelineEmbed
              sourceType="list"
              id={220100704}
              theme="dark"
              options={{ width: 400, height: 600 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;