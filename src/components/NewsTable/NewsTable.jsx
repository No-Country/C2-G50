import React from "react";
import NewsRow from "../NewsRow/NewsRow";

import "./NewsTable.css";

const NewsTable = ({ news }) => {
  return (
    <table className="news__table">
      <thead>
        <tr>
          <th>Source</th>
          <th>Title</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {news.map((el) => (
          <NewsRow data={el} key={el.title} />
        ))}
      </tbody>
    </table>
  );
};

export default NewsTable;
