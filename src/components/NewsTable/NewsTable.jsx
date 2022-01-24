import React from "react";
import NewsRow from "../NewsRow/NewsRow";

import "./NewsTable.css";

const NewsTable = ({ news }) => {
  return (
    <table className="news__table">
      <thead>
        <tr>
          <th className="Title">Title</th>
          <th className="Source">Source</th>
          <th className="Country">Country</th>
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
