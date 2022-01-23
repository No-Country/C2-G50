import React from "react";

import "./NewsRow.css";

const NewsRow = ({ data }) => {
  return (
    <tr className="new__row">
      <td className="new__title">
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          {data.title}
        </a>
      </td>
      <td className="new__source">{data.source.toUpperCase()}</td>
      <td className="new__country">{data.country}</td>
    </tr>
  );
};

export default NewsRow;
